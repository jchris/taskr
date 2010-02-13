function() {
  var texta = $("textarea[name=body]", this);
  var li = $(this).parents("li");
  var app = $$(this).app;
  var task_id = li.attr("data-id");
  // todo extract to model layer?
  var newReply = {
    reply_to : task_id,
    body : texta.val(),
    type : "reply",
    created_at : new Date(),
    authorProfile : $$("#profile").profile
  };
  app.db.saveDoc(newReply, {
    success : function() {
      texta.val('');
    }
  });
  return false;
}