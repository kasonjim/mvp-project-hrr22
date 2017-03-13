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
    'food': '',
    'drink': ''
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
    'food': '',
    'drink': ''
  };

  console.log($scope.currCategory);
  console.log($scope.titles);
  console.log($scope.phrases);
  console.log($scope.entries);

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
    console.log('toggleCategory called');
    // function to toggle current category
      // change title as well
  };
});