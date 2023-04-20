"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const helmet = require("helmet");
// const port = 8888;
const port = process.env.PORT || 8888;

const app = express();

require("dotenv").config();

const cors = require("cors")
  .use(cors())
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods: *");
    res.header("Allow: *");
    next();
  });

const {
  getEvents,
  getWorkshops,
  addUser,
  getUsers,
  addComment,
  getComments,
  deleteComment,
} = require("./handlers");

// Below are methods that are included in express(). We chain them for convenience.
// --------------------------------------------------------------------------------

// This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
app.use(morgan("tiny"));
app.use(express.json());
// app.use(helmet());
// app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({ itWorked: true });
});
app.get("/get-events", getEvents);
app.get("/get-workshops", getWorkshops);
app.get("/get-users", getUsers);
app.post("/add-users", addUser);
app.get("/get-comments", getComments);
app.post("/add-comment", addComment);
app.delete(`/delete-comment/:_id`, deleteComment);

// this is our catch all endpoint.
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
  });
});

// Node spins up our server and sets it to listen on our port #.
app.listen(port, () => console.info(`Listening on port ${port}`));

// app.listen(process.env.PORT || 8888, () =>
//   console.log(`Listening on port ${port}`)
// );
