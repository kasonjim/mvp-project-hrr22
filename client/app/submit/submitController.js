angular.module('sendhalp.submit', [])
.controller('SubmitController', function($scope) {

  $scope.submitNewEntry = function() {
    console.log('submission', $scope.submittedBy);
    console.log('submission', $scope.category);
    console.log('submission', $scope.title);
    console.log('submission', $scope.description);
    console.log('submission', $scope.url);
  };
});