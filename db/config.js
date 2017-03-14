var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sendhalpDB');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
  console.log('connected to sendhalpDB');
});

module.exports = db;