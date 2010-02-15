function() {
  var docs = $$(this).app.ddoc.vendor.couchapp.docs;
  var dnames = [];
  for (var d in docs) {
    dnames.push({title:d});
  }
  return {docs:dnames};
};