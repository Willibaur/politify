describe('factory: MpSearch', function() {
  var mpSearch;

  beforeEach(module('Politify'));


  beforeEach(inject(function(MpSearch, $httpBackend){
    mpSearch = MpSearch;
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "http://www.theyworkforyou.com/api/getMP?constituency=christchurch&key=CZog2vDXeZTXGfbksgA3L6hd&output=js")
    .respond(
      { items: "MP Data" }
    );
  }));

  it('responds to query', function(){
    expect(mpSearch.query).toBeDefined();
  });

  it('returns search results', function () {
    mpSearch.query()
      .then(function (response) {
        expect(response.data.full_name).toEqual
        ("MP Data");
      });
  });
});
