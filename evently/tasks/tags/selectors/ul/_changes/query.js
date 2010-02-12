function(e) {
  var params = e.data.args[1];
  return {
    view : "tag-cloud",
    limit : 25,
    startkey : [params.tag, {}],
    endkey : [params.tag],
    reduce : false,
    descending : true,
    type : "newRows"
  }
}
