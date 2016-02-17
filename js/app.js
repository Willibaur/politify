var politify = angular.module('Politify',
['ngResource', 'ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://politify.firebaseio.com/');

politify.filter("sanitize", ['$sce', function($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  };
}]);

politify.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run

politify.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'styling/views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'styling/views/register.html',
      controller: 'RegistrationController'
    }).
    when('/account', {
      templateUrl: 'styling/views/account.html',
      controller: 'MeetingsController'
    }).

    when('/success', {
      templateUrl: 'styling/views/success.html',
      controller: 'SuccessController',
      resolve: {
        currentAuth: function(Authentication) {
          return Authentication.requireAuth();
        } //current Auth
      } //resolve
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);
