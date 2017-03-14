angular.module('sendhalp.factories', [])

.factory('Saved', function() {
  var savedEntries = [];

  var addEntry = function(id) {
    console.log(savedEntries);

    if (savedEntries.indexOf(id) === -1) {
      savedEntries.push(id);
      return true;
    } else {
      return false;
    }
  };

  var removeEntry = function(id) {
    console.log('called removeEntry from browseController');

  };

  return {
    addEntry: addEntry,
    removeEntry: removeEntry
  };
})

.factory('Entries', function($http) {
  // functions to get and post entries
})

.factory('Phrases', function($http) {
  // function to get phrases from server
});