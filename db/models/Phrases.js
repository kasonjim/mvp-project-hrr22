var mongoose = require('mongoose');

// FOR FUTURE REFERENCE, NEED TO HAVE A CATEGORY SCHEMA THAT
// ALLOWS PHRASES AND ENTRIES TO POINT TO THE CATEGORY INSTEAD
// OF HARD CODING 'food' AND 'drink' INTO THE MODELS AS STRINGS
var phrasesSchema = mongoose.Schema({
  _id: Number,
  category: String,
  text: String
});

var Phrases = mongoose.model('Phrases', phrasesSchema);

module.exports = Phrases;

console.log('Initialized Phrases.js model/schema file');