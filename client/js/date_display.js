Session.set("current_date", new Date());

Meteor.setInterval(function(){
  Session.set("current_date", new Date());
}, 1000);


Template.date_display.helpers({
  current_date: function() {
    return Session.get("current_date");
  }
});

Template.date_display.events({
  // TODO: Place events here.
});
