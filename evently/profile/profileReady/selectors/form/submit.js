function() {
  var profile = $$("#profile").profile;
  // $.log("profile", profile, this);
  var texta = $("textarea[name=body]", this);
  var newTask = {
    _id : Math.random().toString(),
    body : texta.val(),
    type : "task",
    created_at : new Date(),
    authorProfile : profile
  };
  // works because app is attached all the way down
  // maybe we need a better way to support shared state?
  $$(this).app.db.saveDoc(newTask, {
    success : function() {
      texta.val('');
    }
  });
  return false;
}