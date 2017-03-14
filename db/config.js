var mongoose = require('mongoose');
var defaults = require('./defaults'); // this will run the functions inside default.js on init

//mongoose.connect('mongodb://kasonjim:kasonjim@ds131480.mlab.com:31480/heroku_p4pk8lvs');
mongoose.connect('mongodb://localhost/sendhalpDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log('connected to sendhalpDB');
  defaults.initializePhrases()
    .then(function() {
      defaults.createDefaultPhrases();
    });
  defaults.initalizeEntries()
    .then(function() {
      defaults.createDefaultEntries();
    });
});

module.exports = db;