angular.module('sendhalp.factories', [])

.factory('Saved', function() {
  var savedEntries = [];

  var addEntry = function(id) {
    console.log('called addEntry from browseController');
  };

  var checkIfSaved = function(id) {

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