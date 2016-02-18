politify.controller('TabController', function(){
  this.tab = 0;

  this.setTab = function(selectedTab){
    this.tab = selectedTab;
  };

  this.isSet = function(givenTab){
    return this.tab === givenTab;
  };
});
