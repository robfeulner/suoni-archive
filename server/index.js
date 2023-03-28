"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const port = 8888;

const { stock, customers } = require("./data/inventory");

const app = express();
// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).json({ itWorked: true });
  })

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇

  .post("/order", (req, res) => {
    console.log(customers);

    const {
      givenName,
      surname,
      email,
      address,
      province,
      postcode,
      country,
      city,
    } = req.body;

    let invalid = false;

    customers.forEach((element) => {
      if (
        element.givenName.toLowerCase() === givenName.toLowerCase() &&
        element.surname.toLowerCase() === surname.toLowerCase()
      ) {
        invalid = true;
      }

      if (
        element.address.toLowerCase() === address.toLowerCase() ||
        element.email.toLowerCase() === email.toLowerCase()
      ) {
        invalid = true;
      }
    });

    if (invalid) {
      return res.status(400).json({
        status: "error",
        error: "repeat-customer",
      });
    }

    if (!email || !email.toLowerCase().includes("@")) {
      return res.status(400).json({
        status: "error",
        error: "missing-data",
      });
    }

    if (!country || !country.toLowerCase().includes("canada")) {
      return res.status(400).json({
        status: "error",
        error: "undeliverable",
      });
    }

    if (req.body.order === "tshirt" && req.body.size === "undefined") {
      return res.status(400).json({
        status: "error",
        error: "missing-data",
      });
    }

    const stockObject = Object.entries(stock);
    // create let variable for outOfStock to use in forEach return

    stockObject.forEach(([key, value]) => {
      if (key === req.body.order) {
        if (typeof value === "object") {
          if (stock[req.body.order][req.body.size] === "0") {
            invalid = true;
          }
        } else if (value === "0") {
          invalid = true;
        }
      }
    });

    if (invalid) {
      return res.status(400).json({
        status: "error",
        error: "unavailable",
      });
    }

    // const stock = {
    //   bottle: "229",
    //   socks: "342",
    //   tshirt: {
    //     small: "45",
    //     medium: "0",
    //     large: "21",
    //     xlarge: "19",
    //   },
    // };

    // push all pertinent customer information {email, address, etc.} to customers array
    customers.push({
      givenName,
      surname,
      email,
      address,
      province,
      postcode,
      city,
      country,
    });

    res.status(200).json({
      status: "success",
    });
    // console.log(stock);
    // console.log(customers);
  })

  // \/ TEST .get TO MAKE SURE MY DATA IS SAVED \/

  // .get("/customers", (req, res) => {
  //   res.status(200).json({
  //     status: 200,
  //     message: `Is this working? Yes!`,
  //     data: customers,
  //   });
  // })

  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
