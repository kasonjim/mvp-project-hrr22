var Phrases = require('./models/Phrases');
var Entries = require('./models/Entries');

exports.initializePhrases = function() {
  // Drop Phrases collection and rebuild with default values
  return Phrases.remove({}, function(err) {
    if (err) { return console.log('error', err); }
    console.log('Phrases collection removed');
  });
};

exports.initalizeEntries = function() {
  // Drop Entries collection and rebuild with default values
  return Entries.remove({}, function(err) {
    if (err) { return console.log('error', err); }
    console.log('Entries collection removed');
  });
};

// Insert some default Phrases
var defaultPhrases = [
  { _id: 1, category: 'food', text: 'Feast me some of them...' },
  { _id: 2, category: 'food', text: 'Shovel me a truck full of...' },
  { _id: 3, category: 'food', text: 'Grind it up and snort me a kilo of...' },
  { _id: 4, category: 'food', text: 'Pound me with a tray of...' },
  { _id: 5, category: 'drink', text: 'Drink me some good...' },
  { _id: 6, category: 'drink', text: 'Drown me in some...' },
  { _id: 7, category: 'drink', text: 'Pour me a bucket of...' },
  { _id: 8, category: 'drink', text: 'Let me bathe in a river of...' },
  { _id: 9, category: 'drink', text: 'Inject me with a large dose of...' }
];
exports.createDefaultPhrases = function() {
  console.log('Inserting default phrases');

  defaultPhrases.forEach( function(phrase) {
    var newPhrase = new Phrases(phrase);
    newPhrase.save(function(err) {
      if (err) { return console.log('error', err); }
    });
  });
};

// Insert some default Entries
var defaultEntries = [
  { _id: 1, category: 'food', title: 'FOOD #1', url: 'http://www.amazon.com', description: 'asdf', submittedBy: 'Ife'},
  { _id: 2, category: 'food', title: 'FOOD #2', url: 'http://www.google.com', description: 'q2r3', submittedBy: 'Tre'},
  { _id: 3, category: 'food', title: 'FOOD #3', url: 'http://www.bestbuy.com', description: 'fiew', submittedBy: 'Robin'},
  { _id: 4, category: 'drink', title: 'DRINK #1', url: 'http://www.facebook.com', description: 'oepw', submittedBy: 'Tre'},
  { _id: 5, category: 'drink', title: 'DRINK #2', url: 'http://www.stackoverflow.com', description: '49zz', submittedBy: 'Cody'},
  { _id: 6, category: 'drink', title: 'DRINK #3', url: 'http://www.quora.com', description: '9328', submittedBy: 'Luke'}
];
exports.createDefaultEntries = function() {
  console.log('Inserting default entries');

  defaultEntries.forEach( function(entry) {
    var newEntry = new Entries(entry);
    newEntry.save(function(err) {
      if (err) { return console.log('error', err); }
    });
  });
};