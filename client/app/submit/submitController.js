angular.module('sendhalp.submit', [])
.controller('SubmitController', function($scope, Entries) {

  $scope.submitNewEntry = function() {
    if ($scope.submittedBy === undefined ||
        $scope.submittedBy.length === 0 ||
        $scope.category === undefined ||
        $scope.title === undefined ||
        $scope.title.length === 0 ||
        $scope.description === undefined ||
        $scope.description.length === 0 ||
        $scope.url === undefined ||
        $scope.url.length === 0) {
      console.log('Error submitting new entry: all fiends must be filled out');
      alert('Please fill out all fields before submitting');
    } else {
      Entries.postEntry({
        submittedBy: $scope.submittedBy,
        category: $scope.category,
        title: $scope.title,
        description: $scope.description,
        url: $scope.url
      });

      $scope.submittedBy = '';
      $scope.title = '';
      $scope.description = '';
      $scope.url = '';

      alert('Successfully added');
    }
  };
});