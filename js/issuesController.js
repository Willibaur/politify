// politify.controller('MeetingsController',
//   ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL',
//   function($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {
//
//     var ref = new Firebase(FIREBASE_URL);
//     var auth = $firebaseAuth(ref);
//
//         var postcodeRef = new Firebase(FIREBASE_URL + '/MPs/KateHoey/petitions/-KAegZ3jo6ZbEW3Q9BWF/issue' + '/comments';
//         var postcodeInfo = $firebaseArray(postcodeRef);
//         $scope.postcodes = postcodeInfo;
//
//         $scope.addMeeting = function() {
//           postcodeInfo.$add({
//             name: $scope.postcode,
//             date: Firebase.ServerValue.TIMESTAMP
//           }).then(function() {
//             $scope.postcode='';
//           }); //promise
//         }; // addMeeting
//
//         $scope.deletePostcode = function(key) {
//           postcodeInfo.$remove(key);
//         };
//       } // User Authenticated
//
// }]); //Controller
