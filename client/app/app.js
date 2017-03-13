angular.module('sendhalp', [
  'ngRoute',
  'sendhalp.browse',
  'sendhalp.saved',
  'sendhalp.submit',
  'sendhalp.factories'
])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/browse', {
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController'
    })
    .when('/saved', {
      templateUrl: 'app/saved/saved.html',
      controller: 'SavedController'
    })
    .when('/submit', {
      templateUrl: 'app/submit/submit.html',
      controller: 'SubmitController'
    })
    .when('/404', {
      templateUrl: 'app/404.html',
    })
    .when('/', {
      redirectTo: '/browse'
    })
    .otherwise({
      redirectTo: '/404'
    });

  $locationProvider.hashPrefix('');
});