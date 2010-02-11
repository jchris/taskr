// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {
  // console.log(app.ddoc);
  
  // An evently widget that displays a tag cloud which is updated when 
  // the underlying data changes. The code for this widget is stored 
  // in the evently/tagcloud directory.
  $("#tagcloud").evently(app.ddoc.evently.tagcloud, app);
  
  // this is the same thing, but for a cloud of usernames
  $("#usercloud").evently(app.ddoc.evently.usercloud, app);

  // customize the couchapp profile widget with our templates and selectors
  $.extend(true, 
    app.ddoc.vendor.couchapp.evently.profile, 
    app.ddoc.evently.profile);
  
  // apply the widget to the dom
  $("#profile").evently(app.ddoc.vendor.couchapp.evently.profile, app);
  
  // setup the account widget
  $("#account").evently(app.ddoc.vendor.couchapp.evently.account, app);  
  
  // trigger the profile widget's events corresponding to the account widget
  $.evently.connect($("#account"), $("#profile"), ["loggedIn", "loggedOut"]);
});

$.log = function() {
  // console.log(arguments);
};
