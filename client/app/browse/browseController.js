angular.module('sendhalp.browse', [
  'sendhalp.factories'
])

.controller('BrowseController', function($scope, Saved) {
  var foodString = 'food';
  var drinkString = 'drink';

  // Current page category (default = food)
  $scope.currCategory = foodString;
  $scope.currPhrase = '';

  // Array of titles, and phrases for each category
  $scope.titles = {
    'food': 'Title Phrase for FOOD category',
    'drink': 'Title Phrase for DRINK category'
  };

  $scope.phrases = {
    'food': ['test FOOD phrase 1', 'test FOOD phrase 2', 'test FOOD phrase 3'],    // LATER TO BE POPULATED FROM "GET" REQUEST
    'drink': ['test DRINK phrase 1', 'test DRINK phrase 2', 'test DRINK phrase 3']    // LATER TO BE POPULATED FROM "GET" REQUEST
  };

  $scope.entries = {
    'food': [],    // LATER TO BE POPULATED FROM "GET" REQUEST
    'drink': []    // LATER TO BE POPULATED FROM "GET" REQUEST
  };

  $scope.switchButtonText = {
    'food': 'I ain\'t hungry, gimme a drink',   // If on food page, text will say to switch to drink page
    'drink': 'Can\'t drink on an empty stomach'
  };

  $scope.generatePhrase = function() {
    var index = Math.floor(Math.random() * $scope.phrases[$scope.currCategory].length);
    $scope.currPhrase = $scope.phrases[$scope.currCategory][index];
  };

  $scope.addToList = function() {
    // add to saved list in factories "Saved"

    $scope.generatePhrase();
  };

  $scope.generateNext = function() {
    // select next entry

    $scope.generatePhrase();
  };

  $scope.toggleCategory = function() {
    if ($scope.currCategory === foodString) {
      $scope.currCategory = drinkString;
      $scope.generatePhrase();
    } else {
      $scope.currCategory = foodString;
      $scope.generatePhrase();
    }
  };

  // Generate the first random phrase upon loading
  $scope.generatePhrase();

  console.log($scope.currCategory);
  console.log($scope.titles);
  console.log($scope.phrases);
  console.log($scope.entries);
  console.log($scope.switchButtonText);
});