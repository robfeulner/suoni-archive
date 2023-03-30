const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
("use strict");

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// returns an array of all events
const getEvents = async (req, res) => {
  const _id = req.params.events;
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const result = await db.collection("events").find().toArray();
    console.log(result);
    res.status(200).json({ status: 200, _id, data: result });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// returns an array of all workshops
const getWorkshops = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const result = await db.collection("workshops").find({}).toArray();
    // console.log(result);
    res.status(200).json({ status: 200, data: result });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Get all the collections of this MongoDB project
const getCollections = () => {
  const events = db.collection("events"); // Items collection
  const workshops = db.collection("workshops"); // Companies collection

  return { events, workshops };
};

module.exports = {
  getEvents,
  getWorkshops,
  getCollections,
};
