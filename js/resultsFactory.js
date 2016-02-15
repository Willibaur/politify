politify.factory('ResultsFactory', [function() {
  var factory = {};

  factory.mpName = function(mpResults) {
    return mpResults.full_name;
  };

  factory.party = function(mpResults) {
    return mpResults.party;
  };

  factory.constituency = function(mpResults) {
    return mpResults.constituency;
  };

  factory.dept = function(mpResults) {
    return mpResults.office[0].dept;
  };

  factory.image = function(mpResults) {
    return mpResults.image;
  };

  factory.website = function(votes) {
    return votes.mp_website;
  };

  factory.expenses = function(votes) {
    return votes.expenses_url;
  };

  factory.ex_rank = function(votes) {
    return votes.expenses2009_total_rank;
  };

  factory.ex_rank_total = function(votes) {
    return votes.expenses2009_total_rank_outof;
  };

  factory.mp_id = function(mpResults) {
    return mpResults.person_id;
  };

  factory.mp_link_name = function(mpResults){
    return mpResults.full_name.replace(/\s+/g, '');
  };

  factory.mpConstituency = function(mpResults){
    return mpResults.constituency.replace(/\s+/g, '');
  };

  factory.mpTwitterHandle = function(mpDetails){
    return mpDetails.twitterhandle.replace(/@/, '').toLowerCase();
  };


  return factory;
}]);
