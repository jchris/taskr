function(e) {
  var params = e.data.args[1];
  return {
    view : "user-cloud",
    limit : 25,
    startkey : [params.name, {}],
    endkey : [params.name],
    reduce : false,
    descending : true,
    type : "newRows"
  }
}
