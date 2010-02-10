// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {
  
  // An evently widget that displays a tag cloud which is updated when 
  // the underlying data changes. The code for this widget is stored 
  // in the evently/tagcloud directory.
  $("#tagcloud").evently(app.ddoc.evently.tagcloud, app);
  
  // this is the same thing, but for a cloud of usernames
  $("#usercloud").evently(app.ddoc.evently.usercloud, app);

  // customize the profile widget with our templates and selectors
  $.couch.app.profile.loggedOut.mustache = app.ddoc.templates.logged_out;
  $.couch.app.profile.profileReady.mustache = app.ddoc.templates.create_task;

  var userProfile;
  $.couch.app.profile.profileReady.after = function(e, profile) {
    userProfile = profile; // store for later
  };
  
  $.couch.app.profile.profileReady.selectors = {
    "form" : {
      // users with profiles can create tasks.
      submit : function() {
        var texta = $("textarea[name=body]", this);
        var newTask = {
          body : texta.val(),
          type : "task",
          created_at : new Date(),
          authorProfile : userProfile
        };
        app.db.saveDoc(newTask, {
          success : function() {
            texta.val('');
          }
        });
        return false;
      }
    }
  };

  // apply the customized profile evently widget to the page
  $("#profile").evently($.couch.app.profile);
  // setup the account widget
  $("#account").evently($.couch.app.account);
  
  // trigger the profile widget's events corresponding to the account widget
  $.evently.connect($("#account"), $("#profile"), ["loggedIn", "loggedOut"]);

});
