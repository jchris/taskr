function() {
  var li = $(this).parents("li");
  var task_id = li.attr("data-id");
  var app = $$(this).app;
  app.db.openDoc(task_id, {
    success : function(doc) {
      doc.state = "done";
      doc.done_by = $("#account").attr("data-name");
      doc.done_at = new Date();
      app.db.saveDoc(doc, {
        success : function() {
          li.addClass("done");
          li.slideUp("slow");
        }
      });
    }
  });
  return false;
}