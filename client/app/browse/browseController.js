angular.module('sendhalp.browse', [
  'sendhalp.factories'
])

.controller('BrowseController', function($scope, Saved) {
  var foodString = 'food';
  var drinkString = 'drink';

  // Current page category (default = food)
  $scope.currCategory = foodString;

  // Array of titles, and phrases for each category
  $scope.titles = {
    'food': 'Title Phrase for food category',
    'drink': 'Title Phrase for drink category'
  };

  $scope.phrases = {
    'food': [],    // LATER TO BE POPULATED FROM "GET" REQUEST
    'drink': []    // LATER TO BE POPULATED FROM "GET" REQUEST
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

  };

  $scope.addToList = function() {
    console.log('addToList called');
    // add to saved list in factories "Saved"
    // trigger another random phrase
  };

  $scope.generateNext = function() {
    console.log('generateNext called');
    // trigger random phrase
  };

  $scope.toggleCategory = function() {
    if ($scope.currCategory === foodString) {
      $scope.currCategory = drinkString;
    } else {
      $scope.currCategory = foodString;
    }
  };

  console.log($scope.currCategory);
  console.log($scope.titles);
  console.log($scope.phrases);
  console.log($scope.entries);
  console.log($scope.switchButtonText);
});