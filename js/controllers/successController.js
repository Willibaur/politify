politify.controller('SuccessController',
                    ['$scope', '$http', 'MpSearch',
                      'NewsSearch', 'Votes', 'ResultsFactory',
                      'mpDbFactory','Issues',
                      function ($scope, $http, MpSearch, NewsSearch, Votes,
                                ResultsFactory, mpDbFactory, Issues) {
  var self = this;
  self.postcode = self.postcode || '';
  self.validate = false;
  self.issue = '';

    $scope.success = false;
    $scope.error = false;


    self.doSearch = function() {
      if(self.postcode !== '') {
        MpSearch.query(self.postcode)
        .success(function(response) {
          self.mpResults = response;
          console.log(response);
          // finds mp details based on constituency

          NewsSearch.query(self.mpResults.full_name)
          .success(function(response) {
            self.newsResults = response.data;
            console.log(response);
          });
          // // finds news about mp based on name

          Votes.query(self.mpResults.person_id)
          .success(function(response){
            self.votes = response;
            console.log(response);
            self.validate = true;
            // finds voting information based on mps id
          });
          mpDbFactory.query(self.mpResults.given_name, self.mpResults.family_name)
          .then(function(result) {
            console.log(result);
            self.mpDetails = result;
            self.showResults();
            self.addTwitterWidget();
          });
        });
      }
    };

  self.showResults = function() {
    self.mpName = ResultsFactory.mpName(self.mpResults);
    self.party = ResultsFactory.party(self.mpResults);
    self.constituency = ResultsFactory.constituency(self.mpResults);
    self.dept = ResultsFactory.dept(self.mpResults);
    self.image = ResultsFactory.image(self.mpResults);
    self.website = ResultsFactory.website(self.mpDetails);
    self.expenses = ResultsFactory.expenses(self.votes);
    self.ex_rank = ResultsFactory.ex_rank(self.votes);
    self.ex_rank_total = ResultsFactory.ex_rank_total(self.votes);
    self.mp_id = ResultsFactory.mp_id(self.mpResults);
    self.mp_link_name = ResultsFactory.mp_link_name(self.mpResults);
    self.mpConstituency = ResultsFactory.mpConstituency(self.mpResults);
    self.mpTwitterHandle = ResultsFactory.mpTwitterHandle(self.mpDetails);
  };

  $scope.sendMessage = function( input ) {
    input.submit = true;
    $http({
        method: 'POST',
        url: 'processForm.php',
        data: angular.element.param(input),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success( function(data) {
      if ( data.success ) {
        $scope.success = true;
      } else {
        $scope.error = true;
      }
    } );
  };

  self.addIssue = function() {
    Issues.addIssue(self.mpResults.given_name, self.mpResults.family_name, self.issue);
    self.issue = '';
    self.makeDbCall();
  };

  self.makeDbCall = function() {
    mpDbFactory.query(self.mpResults.given_name, self.mpResults.family_name)
    .then(function(result) {
      console.log(result);
      self.mpDetails = result;
    });
  };

  self.addTwitterWidget = function() {
    document.getElementById('timeline').innerHTML = "";
    twttr.widgets.createTimeline(
      '698120503601586176',
      document.getElementById('timeline'),
      {
        width: '100%',
        height: '700',
        related: 'twitterdev,twitterapi',
        screenName: self.mpTwitterHandle
      }).then(function (el) {
        console.log("Twitter timeline added");
    });
  };

}]);
