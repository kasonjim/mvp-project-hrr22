var express = require('express');
var bodyParser = require('body-parser');
var handler = require('./request-handler.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client"));

// Getting and Posting Food/Beverage entries
app.get('/api/entries', handler.getEntries);
app.post('/api/entries', handler.postEntry);

// Get phrases from the library
app.get('/api/phrases', handler.getPhrases);

// Handle other routes not defined
app.get('/*', handler.redirect);
app.post('/*', handler.reject);

module.exports = app;