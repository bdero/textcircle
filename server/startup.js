Meteor.startup(function() {
  if (!Documents.findOne()) {
    Documents.insert({title: "my new document"});
  }
});
