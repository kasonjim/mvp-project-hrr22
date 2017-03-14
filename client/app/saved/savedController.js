angular.module('sendhalp.saved', [])
.controller('SavedController', function($scope, Saved, Entries) {
  $scope.savedItems = {
    'food': Entries.entries['food'].filter(function(foodItem) {
      return Saved.savedEntries['food'].indexOf(foodItem.id) !== -1;
    }),
    'drink': $scope.savedDrinkItems = Entries.entries['drink'].filter(function(drinkItem) {
      return Saved.savedEntries['drink'].indexOf(drinkItem.id) !== -1;
    })
  };

  $scope.removeItem = function(id, category, index) {
    $scope.savedItems[category].splice(index, 1);
    Saved.removeEntry(id, category);
  };

  // console.log('saved food items', $scope.savedItems.food);
  // console.log('saved drink items', $scope.savedItems.drink);
});