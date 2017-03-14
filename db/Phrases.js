var mongoose = require('mongoose');

var phrasesSchema = mongoose.Schema({
  category: String,
  text: String
  // id, created, modified?
});

var Phrases = mongoose.model('Phrases', phrasesSchema);