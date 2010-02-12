function() {
  var li = $(this).parents("li");
  var app = $$(this).app;
  $("div.replies",li).evently(app.ddoc.evently.replies, app);
  return false;
}