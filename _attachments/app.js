// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {
  
  $("#tagcloud").evently(tagcloud, app);
  
  var tagcloud = {
    _changes : {
      query : {
        view : "tag-cloud",
        group_level : 1,
      },
      mustache : app.ddoc.templates.tag_cloud,
      data : function(resp) {
        // $.log("tagcloud data", arguments)
        var tags = resp.rows.map(function(r) {
          return {
            tag : r.key,
            // todo use a new mustache delimiter for this
            tag_uri : encodeURIComponent(r.key),
            count : r.value * 10
          }
        });
        return {tags:tags};
      }
    }
  };
  
  var usercloud = {
    _changes : {
      query : {
        view : "user-cloud",
        group_level : 1,
      },
      mustache : app.ddoc.templates.user_cloud,
      data : function(resp) {
        var users = resp.rows.map(function(r) {
          return {
            user : r.key,
            user_uri : encodeURIComponent(r.key),
            count : r.value * 10
          }
        });
        return {users:users};
      }
    }
  };
  
  $("#usercloud").evently(usercloud, app);

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
