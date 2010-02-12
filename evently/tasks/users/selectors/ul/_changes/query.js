function(e) {
  var params = e.data.args[1];
  return {
    view : "users-tasks",
    limit : 25,
    startkey : [params.name, {}],
    endkey : [params.name],
    descending : true,
    type : "newRows"
  }
}
