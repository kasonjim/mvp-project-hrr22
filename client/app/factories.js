angular.module('sendhalp.factories', [])

.factory('Saved', function() {
  var savedEntries = {
    'food': [],
    'drink': []
  };

  var addEntry = function(_id, category) {
    // console.log(savedEntries);

    if (savedEntries[category].indexOf(_id) === -1) {
      savedEntries[category].push(_id);
      return true;
    } else {
      return false;
    }
  };

  var removeEntry = function(_id, category) {
    if (savedEntries[category].indexOf !== -1) {
      savedEntries[category].splice(savedEntries[category].indexOf(_id), 1);
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
  var phrases = {
    'food': [],
    'drink': []
  };

  var getPhrases = function() {
    return $http({
      method: 'GET',
      url: '/api/phrases'
    })
    .then(function(res) {
      var receivedPhrases = res.data;
      receivedPhrases.forEach(function(phrase) {
        if (phrase.category === 'food') {
          phrases.food.push(phrase);
        } else {
          phrases.drink.push(phrase);
        }
      });
      console.log(phrases);
    });
  };

  // invoke getPhrases upon initialization of page
  getPhrases();

  return {
    phrases: phrases,
    getPhrases: getPhrases
  };
})

.factory('Entries', function($http) {
  var entries = {
    'food': [],
    'drink': []
  };

  var getEntries = function() {
    return $http({
      method: 'GET',
      url: '/api/entries'
    })
    .then(function(res) {
      var receivedEntries = res.data;
      receivedEntries.forEach(function(entry) {
        if (entry.category === 'food') {
          entries.food.push(entry);
        } else {
          entries.drink.push(entry);
        }
      });
    });
  };

  // LATER TO BE DONE WITH A POST REQUEST, THEN A PROMISE TO GET ENTRIES (NOTED ABOVE);
  // FUTURE NOTE: WE ARE POSTING TO ONE "ENTRY" TABLE
  var postEntry = function(submission) {
    submission._id = Date.now();

    // entries[submission.category].push(submission);
  };

  // invoke getEntries upon initialization of page
  getEntries();

  return {
    entries: entries,
    getEntries: getEntries,
    postEntry: postEntry
  };
});