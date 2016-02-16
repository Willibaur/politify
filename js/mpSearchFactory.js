politify.factory('MpSearch', ['$http', function($http) {
  var queryUrl = "http://www.theyworkforyou.com/api/getMP?postcode=";
  var key = "&key=CZog2vDXeZTXGfbksgA3L6hd";
  return {

    query: function(postcode) {
      return $http.get(
        queryUrl + postcode + key + "&output=js"
      );
    }
  };
}]);
