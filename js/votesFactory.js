politify.factory('Votes', ['$http', function($http) {
  var queryUrl = "http://www.theyworkforyou.com/api/getMPInfo?id=";
  var key = "&key=Czucj4AbhGMiDTvjd6A6tLHd";

  return {

    query: function(id) {
      return $http.jsonp(
        queryUrl + id + "&output=js" + key + "&callback=JSON_CALLBACK"
      );
    }
  };
}]);
