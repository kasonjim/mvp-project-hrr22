angular.module('sendhalp.browse', [
  'sendhalp.factories'
])

.controller('BrowseController', function($scope, Saved) {
  var foodString = 'food';
  var drinkString = 'drink';

  // Current page category (default = food)
  $scope.currCategory = foodString;
  $scope.currPhrase = '';
  $scope.currEntry = {};

  // Array of titles, and phrases for each category
  $scope.titles = {
    'food': 'I see dat you be starvin',
    'drink': 'You look like you had a long week with the 22\'s'
  };

  $scope.phrases = {
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

  $scope.entries = {
    // LATER TO BE POPULATED FROM "GET" REQUEST
    'food': [
      { id: 1, category: 'food', title: 'test FOOD entry 1', url: 'www.1.com', description: 'asdf', submittedBy: 'Ife', thumbnail: 'src' },
      { id: 2, category: 'food', title: 'test FOOD entry 2', url: 'www.2.com', description: 'q2r3', submittedBy: 'Tre', thumbnail: 'src' },
      { id: 3, category: 'food', title: 'test FOOD entry 3', url: 'www.3.com', description: 'fiew', submittedBy: 'Robin', thumbnail: 'src' }
    ],
    'drink': [
      { id: 4, category: 'drink', title: 'test DRINK entry 1', url: 'www.4.com', description: 'oepw', submittedBy: 'Tre', thumbnail: 'src' },
      { id: 5, category: 'drink', title: 'test DRINK entry 2', url: 'www.5.com', description: '49zz', submittedBy: 'Cody', thumbnail: 'src' },
      { id: 6, category: 'drink', title: 'text DRINK entry 3', url: 'www.6.com', description: '9328', submittedBy: 'Luke', thumbnail: 'src' }
    ]
  };

  $scope.switchButtonText = {
    'food': 'I ain\'t hungry, gimme a drink',   // If on food page, text will say to switch to drink page
    'drink': 'Can\'t drink on an empty stomach'
  };

  $scope.generatePhrase = function() {
    var index = Math.floor(Math.random() * $scope.phrases[$scope.currCategory].length);
    $scope.currPhrase = $scope.phrases[$scope.currCategory][index]["text"];
  };


  // THIS IS FOR THE 'GET' REQUEST FUNCTION, TO KNOW WHAT DATA TO EXPECT AND TO SORT BY 'CATEGORY'
    // need to autopopulate the $scope.phrases and $scope.entries
    // Entries: { id, category, title, url, description, submittedBy, thumbnail source  } - included: createdAt/modifiedAt
    // Phrases: { id, category, text } - included: createdAt/modifiedAt

  $scope.addToList = function() {
    // add to saved list in factories "Saved"
    // need to get id of CURRENT viewing object - save this data somewhere
    //Saved.addEntry(1);


    $scope.generatePhrase();
  };

  $scope.generateNext = function() {
    var index = Math.floor(Math.random() * $scope.entries[$scope.currCategory].length);
    $scope.currEntry = $scope.entries[$scope.currCategory][index];
    console.log(index);
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
  $scope.generateNext();

  console.log($scope.currCategory);
  console.log($scope.currEntry);
  console.log($scope.titles);
  console.log($scope.phrases);
  console.log($scope.entries);
  console.log($scope.switchButtonText);
});