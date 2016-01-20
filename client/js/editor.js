Template.editor.helpers({
  docid: function() {
    var doc = Documents.findOne();
    if (doc) {
      return doc._id;
    }

    return undefined;
  },
  config: function() {
    return function(editor) {
      editor.setOption("lineNumbers", true);
      editor.setOption("theme", "dracula");
      editor.on("change", function(cm_editor, info) {
        $("#viewer_iframe").contents().find("html").html(cm_editor.getValue());
        Meteor.call("addEditingUser");
      });
    };
  }
});
