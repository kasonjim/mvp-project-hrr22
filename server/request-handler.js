var db = require('../db/config');
var Phrases = require('../db/models/Phrases.js');
var Entries = require('../db/models/Entries.js');

exports.getPhrases = function(req, res) {
  Phrases.find({})
    .exec(function(err, phrases) {
      if (!phrases) {
        return console.log('no phrases found');
      }
      res.status(200).send(phrases);
    });
};

exports.getEntries = function(req, res) {
  Entries.find({})
    .exec(function(err, entries) {
      if (!entries) {
        return console.log('no entries found');
      }
      res.status(200).send(entries);
    });
};

exports.postEntry = function(req, res) {
  //res.status(201).send('success from postEntry');
  // post entry from req into mongo
  // return response 201 with "success"
};

exports.redirect = function(req, res) {
  res.redirect('/#/404.html');
};

exports.reject = function(req, res) {
  res.status(500).send('GTFO. THIS AINT A VALID URL');
};