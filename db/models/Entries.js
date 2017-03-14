var mongoose = require('mongoose');

// FOR FUTURE REFERENCE, NEED TO HAVE A CATEGORY SCHEMA THAT
// ALLOWS PHRASES AND ENTRIES TO POINT TO THE CATEGORY INSTEAD
// OF HARD CODING 'food' AND 'drink' INTO THE MODELS AS STRINGS

var entriesSchema = mongoose.Schema({
  _id: Number,
  category: String,
  title: String,
  url: String,
  description: String,
  submittedBy: String
});

var Entries = mongoose.model('Entries', entriesSchema);

module.exports = Entries;

console.log('Initialized Entries.js model/schema file');