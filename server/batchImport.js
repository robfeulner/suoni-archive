require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MONGO_URI } = process.env;

const { events } = require("./events");
const { workshops } = require("./workshops");
const { testingEvents } = require("./testing-events");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  console.log(events, workshops);
  const client = new MongoClient(MONGO_URI, options);
  try {
    console.log("connecting to Mongo");

    await client.connect();
    console.log("connected!");
    const db = client.db("suoni");

    // await db.collection("testingEvents").insertMany(testingEvents);
    // console.log("Testing Events added!");
    await db.collection("events").insertMany(events);
    console.log("Suoni Events added!");
    // await db.collection("workshops").insertMany(workshops);
    // console.log("Suoni Workshops added!");
    console.log("disconnected!");
  } catch (err) {
    console.log(err);
  }
  client.close();
};

batchImport();
