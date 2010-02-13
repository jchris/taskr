$.couch.app(function(app) {
  // now we need to do magic to make more kinds of task displays
  // recent tags mentions users


  // var reply = {
  //   _init: {
  //     mustache : app.ddoc.templates.create_reply,
  //     selectors : {
  //       form : {
  //       }
  //     }
  //   }
  // };
  // 
  // var replies = {
  //   _init: {
  //     mustache : app.ddoc.templates.replies,
  //     data : function(e, rows) {
  //       return {
  //         rows : rows.map(function(r) {
  //           // todo eliminate duplication here
  //           var v = r.value;
  //           return {
  //             avatar_url : v.authorProfile && v.authorProfile.gravatar_url,
  //             body : $.linkify($.mustache.escape(r.value.body)),
  //             name : v.authorProfile && v.authorProfile.name,
  //             name_uri : v.authorProfile && encodeURIComponent(v.authorProfile.name),
  //             id : r.id
  //           }
  //         })
  //       }
  //     }
  //   }
  // };

});
