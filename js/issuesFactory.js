politify.factory('Issues', [function() {
  var factory = {};

  factory.addIssue = function(firstname,familyname,current_issue) {
    var ref = new Firebase("https://politify.firebaseio.com/MPs/"+ firstname + familyname);
    var postsRef = ref.child("petitions");
    var newPostRef = postsRef.push();
    console.log(self.issue);
    newPostRef.set({
      issue: current_issue,
      score: 0
    });
  };

  return factory;
}]);
