politify.controller('TabController', function(){
  this.tab = 1;

  this.setTab = function(selectedTab){
    this.tab = selectedTab;
  };

  this.isSet = function(givenTab){
    return this.tab === givenTab;
  };
});
