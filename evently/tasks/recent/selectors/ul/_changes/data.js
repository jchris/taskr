function(r) {
  var v = r.value;
  var app = $$(this).app;
  return {
    avatar_url : v.authorProfile && v.authorProfile.gravatar_url,
    body : $.linkify($.mustache.escape(r.value.body)),
    name : v.authorProfile && v.authorProfile.name,
    name_uri : v.authorProfile && encodeURIComponent(v.authorProfile.name),
    futon_path : "/_utils/document.html?"+[app.db.name,r.id].map(encodeURIComponent).join('/'),
    id : encodeURIComponent(r.id),
    state : v.state,
    created_at : $.prettyDate(v.created_at)
    // todo this should be handled in dom-land / evently
    // we can use this id as a handle for automatically updating non-top rows
    // based on changes from documents
  };
}
