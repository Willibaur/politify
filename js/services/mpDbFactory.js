politify.factory('mpDbFactory', ['$http', '$q', function($http, $q) {

  var dbCall = function (firstname,familyname) {
    var deferred = $q.defer();
    var ref = new Firebase('https://politify.firebaseio.com/MPs/'+ firstname + familyname);
    ref.on("value", function(snapshot) {
      deferred.resolve(snapshot.val());
    });
    return deferred.promise;
  };

  return {
    query: dbCall
  };
}]);
