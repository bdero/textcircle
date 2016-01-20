Template.editingUsers.helpers({
  users: function() {
    var users = [];

    var doc = Documents.findOne();
    if (!doc) return;
    var eusers = EditingUsers.findOne({docid: doc._id});
    if (!eusers) return;

    for (var user_id in eusers.users) {
      users.push(
        fixObjectKeys(eusers.users[user_id])
      );
    }

    return users;
  }
});

Template.editingUsers.events({
  // TODO: Place events here.
});

function fixObjectKeys(obj) {
  var newObj = {};
  for (key in obj) {
    var key2 = key.replace("-", "");
    newObj[key2] = obj[key];
  }
  return newObj;
}
