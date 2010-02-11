function(r) {
  // $.log("task data", arguments);
  var v = r.value;
  return {
    avatar_url : v.authorProfile && v.authorProfile.gravatar_url,
    body : $.linkify($.mustache.escape(r.value.body)),
    name : v.authorProfile && v.authorProfile.name,
    name_uri : v.authorProfile && encodeURIComponent(v.authorProfile.name),
    futon_path : "/_utils/document.html?"+[app.db.name,r.id].map(encodeURIComponent).join('/'),
    id : encodeURIComponent(r.id),
    state : v.state
    // todo this should be handled in dom-land / evently
    // we can use this id as a handle for automatically updating non-top rows
    // based on changes from documents
  };
}
