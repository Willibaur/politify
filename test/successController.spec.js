describe('SuccessController', function() {
  beforeEach(module('Politify'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('SuccessController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.postcode).toBeUndefined();
  });
});
