var db = require('../db/config.js');
var Phrases;
var Entries;

exports.getEntries = function(req, res) {
  //res.status(200).send('success from getEntries');
};

exports.postEntry = function(req, res) {
  //res.status(201).send('success from postEntry');
};

exports.getPhrases = function(req, res) {
  //res.status(200).send('success from getPhrases');
};

exports.redirect = function(req, res) {
  res.redirect('/#/404.html');
};

exports.reject = function(req, res) {
  res.status(500).send('GTFO. THIS AINT A VALID URL');
};