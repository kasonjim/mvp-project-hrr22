angular.module('sendhalp.submit', [])
.controller('SubmitController', function($scope, Entries) {

  $scope.submitNewEntry = function() {
    Entries.postEntry({
      submittedBy: $scope.submittedBy,
      category: $scope.category,
      title: $scope.title,
      description: $scope.description,
      url: $scope.url
    });
  };
});