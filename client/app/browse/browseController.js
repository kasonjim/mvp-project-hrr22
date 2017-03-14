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
    'food': 'I\'m part of dat world hunger statistic',
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
      // popup notify that it was not added
      console.log('failure');
    } else {
      // popup notify that it was added
      console.log('success');
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
  // execute after we get the phrases
  //$scope.generateNext();

  // console.log($scope.currCategory);
  // console.log($scope.currEntry);
  // console.log($scope.titles);
  // console.log($scope.phrases);
  // console.log($scope.entries);
  // console.log($scope.switchButtonText);
});