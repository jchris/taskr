function(doc) {
  if (doc.type == "task" && doc.state != "done") {
    var words = {};
    doc.body.replace(/\@([\w\-]+)/g, function(tag, word) {
      words[word.toLowerCase()] = true;
    });
    for (var w in words) {
      emit([w, doc.created_at], doc);
    }
  }
}
