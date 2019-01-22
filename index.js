//Author: Vincent Sanchez
//File name: index.js
//Title: index page
//Exercise/Project Number:Twitter-project-1

//this pulls in the express and sets it to a variable called express
var express = require('express');
var app = express();
var port = 8080;

//this route the request to the end point
app.get('/', function (req, res) {
    res.send("<h3>Hello world.</h3>");
});

//this is used when the user start running on the port number set to the port variable
app.listen(port, function(){
    console.log("server is listening on local host:%s", port);
})