politify.controller('MeetingsController',
  ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL',
  function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authUser) {
      if (authUser) {
        var postcodeRef = new Firebase(FIREBASE_URL + 'users/' +
          $rootScope.currentUser.$id + '/meetings');
        var postcodeInfo = $firebaseArray(postcodeRef);
        $scope.postcodes = postcodeInfo;

        $scope.addMeeting = function() {
          postcodeInfo.$add({
            name: $scope.postcode,
            date: Firebase.ServerValue.TIMESTAMP
          }).then(function() {
            $scope.postcode='';
          }); //promise
        }; // addMeeting

        $scope.deletePostcode = function(key) {
          postcodeInfo.$remove(key);
        };
      } // User Authenticated
    }); // on Auth
}]); //Controller
