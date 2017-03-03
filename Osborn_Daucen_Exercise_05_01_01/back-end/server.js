/** Daucen Osborn
    March 3, 2017
    server.js

    Purpose: This file is the main back-end of our server along with much of its endpoints.

    3-2-17 - DMO - Added the beginning of the server with the port it's running on.
    3-3-17 - DMO - Created an endpoint for the messages. Added body-parser.
**/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(bodyParser.json());

//Implement an endpoint for message posting.
app.post('/api/message', function(req, res) {
    console.log(req.body);
    res.status(200);
});

var server = app.listen(port, function() {
  console.log('Server listening on localhost:%s', port);
});
