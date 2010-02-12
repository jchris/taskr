function() {
  var li = $(this).parents("li");
  var reply_id = li.attr("data-id");
  return {
    view : "task-replies",
    limit : 25,
    startkey : [reply_id, {}],
    endkey : [reply_id],
    descending : true,
    type : "newRows"
  }
}
