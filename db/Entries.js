var mongoose = require('mongoose');

var entriesSchema = mongoose.Schema({
  id: ObjectId,
  category: String,
  title: String,
  url: String,
  description: String,
  submittedBy: String
  // id, created, modified?
});

var Entries = mongoose.model('Entries', entriesSchema);