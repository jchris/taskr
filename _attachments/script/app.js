// $.couch.app() loads the design document from the server and 
// then calls our application.
$.couch.app(function(app) {  
  // An evently widget that displays a tag cloud which is updated when 
  // the underlying data changes. The code for this widget is stored 
  // in the evently/tagcloud directory.
  $("#tagcloud").evently("tagcloud", app);
  
  // this is the same thing, but for a cloud of usernames
  $("#usercloud").evently("usercloud", app);
  
  // we customize the profile widget in our evently directory but also 
  // we use code from vendor/couchapp/evently
  // evently knows about this and it just works.
  $("#profile").evently("profile", app);
  
  // setup the account widget
  $("#account").evently("account", app);  
  
  // trigger the profile widget's events corresponding to the account widget
  $.evently.connect($("#account"), $("#profile"), ["loggedIn", "loggedOut"]);
  
  // now set up the main list of tasks
  var tasks = app.ddoc.evently.tasks;
  // todo make a declarative trigger for this pattern
  tasks.tags = $.extend(true, {}, tasks.recent, tasks.tags);
  tasks.mentions = $.extend(true, {}, tasks.recent, tasks.mentions);
  tasks.users = $.extend(true, {}, tasks.recent, tasks.users);
  
  $("#tasks").evently(tasks, app);
  $.pathbinder.onChange(function(path) {
    $("#current-path").text(path);
  });
  $.pathbinder.begin("/");
});

// todo move to a plugin somewhere
// copied to toast's $.couch.app.utils
$.linkify = function(body) {
  return body.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,function(a) {
    return '<a target="_blank" href="'+a+'">'+a+'</a>';
  }).replace(/\@([\w\-]+)/g,function(user,name) {
    return '<a href="#/mentions/'+encodeURIComponent(name)+'">'+user+'</a>';
  }).replace(/\#([\w\-\.]+)/g,function(word,tag) {
    return '<a href="#/tags/'+encodeURIComponent(tag)+'">'+word+'</a>';
  });
};