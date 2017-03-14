angular.module('sendhalp.browse', [
  'sendhalp.factories'
])

.controller('BrowseController', function($scope, Saved, Entries, Phrases) {
  var foodString = 'food';
  var drinkString = 'drink';

  // Current page category (default = food)
  $scope.currCategory = foodString;
  $scope.currPhrase = '';
  $scope.currEntry = {};

  // Array of titles, and phrases for each category
  $scope.titles = {
    'food': 'My stomach is about to eat itself',
    'drink': 'Them 22\'s givin me the run-around'
  };

  $scope.phrases = Phrases.phrases;

  $scope.entries = Entries.entries;

  $scope.switchButtonText = {
    'food': 'I ain\'t hungry, gimme a drink',
    'drink': 'Can\'t drink on an empty stomach'
  };

  $scope.generatePhrase = function() {
    var index = Math.floor(Math.random() * $scope.phrases[$scope.currCategory].length);
    $scope.currPhrase = $scope.phrases[$scope.currCategory][index]["text"];
  };

  $scope.addToList = function() {
    var success = Saved.addEntry($scope.currEntry["_id"], $scope.currCategory);
    if (!success) {
      alert('This item is already in your saved list!');
    }
    $scope.generateNext();
  };

  $scope.generateNext = function() {
    var index = Math.floor(Math.random() * $scope.entries[$scope.currCategory].length);
    $scope.currEntry = $scope.entries[$scope.currCategory][index];
    $scope.generatePhrase();
  };

  $scope.toggleCategory = function() {
    if ($scope.currCategory === foodString) {
      $scope.currCategory = drinkString;
      $scope.generateNext();
    } else {
      $scope.currCategory = foodString;
      $scope.generateNext();
    }
  };

  // Generate the first random phrase upon loading
  // If there are no phrases in the factories storage arrays,
  // call get requests and then generate after successfully
  // getting content from server
  if ($scope.phrases.food.length === 0 || $scope.entries.food.length === 0) {
    console.log('generating for first time');
    Phrases.getPhrases()
      .then(function() {
        console.log('got phrases');
        return Entries.getEntries();
      })
      .then(function() {
        console.log('got entries, now generating page');
        $scope.generateNext();
      });
  } else {
    $scope.generateNext();
  }
});