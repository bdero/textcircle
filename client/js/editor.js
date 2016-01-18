Template.editor.helpers({
  docid: function() {
    var doc = Documents.findOne();
    if (doc) {
      return doc._id;
    }

    return undefined;
  }
})
