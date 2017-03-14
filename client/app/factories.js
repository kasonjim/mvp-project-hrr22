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
    .then(function(result) {
      return new Promise(function(next) {
        var receivedPhrases = result.data;
        receivedPhrases.forEach(function(phrase) {
          if (phrase.category === 'food') {
            phrases.food.push(phrase);
          } else {
            phrases.drink.push(phrase);
          }
        });

        next();
      });
    });
  };

  // invoke getPhrases upon initialization of page
  // getPhrases();

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
    .then(function(result) {
      return new Promise(function(next) {
        var receivedEntries = result.data;
        receivedEntries.forEach(function(entry) {
          if (entry.category === 'food') {
            entries.food.push(entry);
          } else {
            entries.drink.push(entry);
          }
        });

        next();
      });
    });
  };

  var postEntry = function(submission) {
    submission._id = Date.now();
    return $http({
      method: 'POST',
      url: '/api/entries',
      data: submission
    })
    .then(function(res) {
      console.log(res);
      getEntries();
    });
  };

  // invoke getEntries upon initialization of page
  // getEntries();

  return {
    entries: entries,
    getEntries: getEntries,
    postEntry: postEntry
  };
});