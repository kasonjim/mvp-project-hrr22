angular.module('sendhalp.factories', [])

.factory('Saved', function() {
  var savedEntries = {
    'food': [],
    'drink': []
  };

  var addEntry = function(id, category) {
    // console.log(savedEntries);

    if (savedEntries[category].indexOf(id) === -1) {
      savedEntries[category].push(id);
      return true;
    } else {
      return false;
    }
  };

  var removeEntry = function(id, category) {
    if (savedEntries[category].indexOf !== -1) {
      savedEntries[category].splice(savedEntries[category].indexOf(id), 1);
    } else {
      console.log('entry does not exist in savedEntries anymore');
    }
  };

  return {
    savedEntries, savedEntries,
    addEntry: addEntry,
    removeEntry: removeEntry
  };
})

.factory('Phrases', function($http) {
  // THIS IS FOR THE 'GET' REQUEST FUNCTION, TO KNOW WHAT DATA TO EXPECT AND TO SORT BY 'CATEGORY'
  // need to autopopulate the $scope.phrases
  // Phrases: { id, category, text } - included: createdAt/modifiedAt

  var phrases = {
    // LATER TO BE POPULATED FROM "GET" REQUEST
    'food': [
      { id: 1, category: 'food', text: 'Feast me some of them...' },
      { id: 2, category: 'food', text: 'Shovel me a truck full of...' },
      { id: 3, category: 'food', text: 'Grind it up and snort me a kilo of...' },
      { id: 4, category: 'food', text: 'Pound me with a tray of...' }
    ],
    'drink': [
      { id: 5, category: 'drink', text: 'Drink me some good...' },
      { id: 6, category: 'drink', text: 'Drown me in some...' },
      { id: 7, category: 'drink', text: 'Pour me a bucket of...' },
      { id: 8, category: 'drink', text: 'Let me bathe in a river of...' },
      { id: 9, category: 'drink', text: 'Inject me with a large dose of...' }
    ]
  };

  // LATER TO BE DONE WITH A GET REQUEST, THEN A PROMISE, TO GET PHRASES FROM SERVER DATABASE
  var getPhrases = function() {

  };

  return {
    phrases: phrases,
    getPhrases: getPhrases
  };
})

.factory('Entries', function($http) {
  // THIS IS FOR THE 'GET' REQUEST FUNCTION, TO KNOW WHAT DATA TO EXPECT AND TO SORT BY 'CATEGORY'
    // need to autopopulate the $scope.entries
    // Entries: { id, category, title, url, description, submittedBy, thumbnail source  } - included: createdAt/modifiedAt

  var entries = {
    // LATER TO BE POPULATED FROM "GET" REQUEST
    'food': [
      { id: 1, category: 'food', title: 'test FOOD entry 1', url: 'www.1.com', description: 'asdf', submittedBy: 'Ife'},
      { id: 2, category: 'food', title: 'test FOOD entry 2', url: 'www.2.com', description: 'q2r3', submittedBy: 'Tre'},
      { id: 3, category: 'food', title: 'test FOOD entry 3', url: 'www.3.com', description: 'fiew', submittedBy: 'Robin'}
    ],
    'drink': [
      { id: 4, category: 'drink', title: 'test DRINK entry 1', url: 'www.4.com', description: 'oepw', submittedBy: 'Tre'},
      { id: 5, category: 'drink', title: 'test DRINK entry 2', url: 'www.5.com', description: '49zz', submittedBy: 'Cody'},
      { id: 6, category: 'drink', title: 'text DRINK entry 3', url: 'www.6.com', description: '9328', submittedBy: 'Luke'}
    ]
  };

  // LATER TO BE DONE WITH A GET REQUEST, THEN A PROMISE
  var getEntries = function() {

  };

  // LATER TO BE DONE WITH A POST REQUEST, THEN A PROMISE TO GET ENTRIES (NOTED ABOVE);
  var postEntry = function(submission) {
    submission.id = 7;
    entries[submission.category].push(submission);
  };

  return {
    entries: entries,
    getEntries: getEntries,
    postEntry: postEntry
  };
});