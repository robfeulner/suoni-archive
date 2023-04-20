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

//CORS functionality

// const allowCors = (fn) => async (req, res) => {
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   // another common pattern
//   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,OPTIONS,PATCH,DELETE,POST,PUT"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );
//   if (req.method === "OPTIONS") {
//     res.status(200).end();
//     return;
//   }
//   return await fn(req, res);
// };

// const handler = (req, res) => {
//   const d = new Date();
//   res.end(d.toString());
// };

// returns an array of all events
const getEvents = async (req, res) => {
  const _id = req.params.events;
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const result = await db.collection("events").find().toArray();

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

    res.status(200).json({ status: 200, data: result });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// get comments

const getUsers = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const result = await db.collection("users").find().toArray();

    res.status(200).json({ status: 200, data: result });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// create a user

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("suoni");

    const { email, name } = req.body;
    const preExistingUser = await db
      .collection("users")
      .findOne({ email: email });

    if (!preExistingUser) {
      await db.collection("users").insertOne(req.body);
      return res.status(201).json({
        status: 201,
        message: "User added to database",
        account: req.body,
      });
    } else {
      return res.status(201).json({
        status: 201,
        message: "This user already exists",
        account: preExistingUser,
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: 500, data: req.body, message: err.message });
  }
};

// get comments

const getComments = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const result = await db.collection("comments").find().toArray();

    res.status(200).json({ status: 200, data: result });
    client.close();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// create a comment

const addComment = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("suoni");
    const { formData, user, date } = req.body;
    const newId = uuidv4();

    const result = await db
      .collection("comments")
      .insertOne({ ...req.body, _id: newId });

    console.log(result);

    if (!result) {
      res.status(404).json({
        status: 404,
        data: "An error has occured",
      });
    } else {
      res.status(201).json({
        status: 201,
        message: "Comment added!",
        _id: newId,
      });
    }
    client.close();
    console.log("disconnected!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, data: req.body, message: err.message });
  }
};

// Delete a comment

const deleteComment = async (req, res) => {
  const { _id } = req.params;

  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();

    const db = client.db("suoni");

    const deleteResponse = await db
      .collection("comments")
      .findOneAndDelete({ _id: _id });

    if (!deleteResponse.value) {
      res.status(404).json({
        status: 404,
        message: `Comment #${_id} not found.`,
      });
    } else {
      res.status(204).json({
        status: 204,
        message: `You deleted comment #${_id}`,
      });
    }

    console.log("disconnected!");
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 500, message: err.message });
  }
  client.close();
};

module.exports = {
  getEvents,
  getWorkshops,
  getComments,
  addComment,
  deleteComment,
  getUsers,
  addUser,
  allowCors,
};
