function() {
  var profile = $(this).parents("#profile").data("profile");
  // $.log("profile", profile, this);
  var texta = $("textarea[name=body]", this);
  var newTask = {
    body : texta.val(),
    type : "task",
    created_at : new Date(),
    authorProfile : profile
  };
  // works because app is attached all the way down
  // maybe we need a better way to support shared state?
  $(this).data("app").db.saveDoc(newTask, {
    success : function() {
      texta.val('');
    }
  });
  return false;
}