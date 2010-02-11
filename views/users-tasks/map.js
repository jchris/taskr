function(doc) {
  if (doc.type == "task" && doc.authorProfile && doc.authorProfile.name) {
    emit([doc.authorProfile.name, new Date(doc.created_at)], doc)
  }
}
