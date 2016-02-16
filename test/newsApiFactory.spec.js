describe('factory: NewsSearch', function() {
  var newsSearch;

  beforeEach(module('Politify'));


  beforeEach(inject(function(NewsSearch, $httpBackend){
    newsSearch = NewsSearch;
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "https://www.googleapis.com/customsearch/v1?key=AIzaSyBT-Am0nfmyOooxDx1vH_g_bidu6WMmdZw&cx=009319641755406046916:tlfw0nofnwk&q=david%20cameron")
    .respond(
      { items: "news" }
    );
  }));

  xit('responds to query', function(){
    expect(newsSearch.query).toBeDefined();
  });

  xit('returns search results', function () {
    newsSearch.query()
      .then(function (response) {
        expect(response.data.title).toEqual
        ("news");
      });
  });
});
