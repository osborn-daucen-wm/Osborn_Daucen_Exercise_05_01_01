/** Daucen Osborn
    March 3, 2017
    server.js

    Purpose: This file is the main back-end of our server along with much of its endpoints.

    3-2-17 - DMO - Added the beginning of the server with the port it's running on.
    3-3-17 - DMO - Created an endpoint for the messages. Added body-parser.
    3-6-17 - DMO - Added a require for mongodb,mongoose, and a way to insert the data into the database. Still need to define the database.
**/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var port = 8080;

var Message = mongoose.model('Message', {
  msg : String
});

app.use(bodyParser.json());

// Resolves an error in CORES
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//Endpoint to get messages from MongoDB
app.get('/api/message', getMessages);

//Implement an endpoint for message posting.
app.post('/api/message', function(req, res) {
    console.log(req.body);

    //database.collection('messages').insertOne(req.body);
    var message = new Message(req.body);
    message.save();
    res.status(200);
});

//Retrieves messages from the database.
function getMessages(req, res) {
  Message.find().exec(function(err, result) {
    res.send(result);
  });
}

// var mongoDB = 'mongodb://localhost:27017/test';
// mongoose.connect(mongoDB);

//Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost:27017/test', function(err, db) {
  if (!err) {
    console.log('Connected to MongoDB');
    database = db;
  }
  else {
    console.log('Woops, error connecting to MongoDB');
  }
});

//Get the default connection
// var database = mongoose.connection;

var server = app.listen(port, function() {
  console.log('Server listening on localhost:%s', port);
});
