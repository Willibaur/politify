
politify.factory('NewsSearch', ['$http', function($http) {
  var queryUrl = "https://www.googleapis.com/customsearch/v1?";
  var key = "key=AIzaSyBT-Am0nfmyOooxDx1vH_g_bidu6WMmdZw&q=";
  var cx = "&cx=009319641755406046916:tlfw0nofnwk";
  return {

    query: function(mpname) {
      return $http.jsonp(
        queryUrl + key + "mp" + mpname + cx + "&callback=JSON_CALLBACK"
      );
    }
  };
}]);
