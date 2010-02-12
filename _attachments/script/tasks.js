$.couch.app(function(app) {
  // now we need to do magic to make more kinds of task displays
  // recent tags mentions users


  // var reply = {
  //   _init: {
  //     mustache : app.ddoc.templates.create_reply,
  //     selectors : {
  //       form : {
  //         submit : function() {
  //           var texta = $("textarea[name=body]", this);
  //           var li = $(this).parents("li");
  //           var task_id = li.attr("data-id");
  //           // todo extract to model layer?
  //           var newReply = {
  //             reply_to : task_id,
  //             body : texta.val(),
  //             type : "reply",
  //             created_at : new Date(),
  //             authorProfile : userProfile
  //           };
  //           app.db.saveDoc(newReply, {
  //             success : function() {
  //               texta.val('');
  //             }
  //           });
  //           return false;
  //         }
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
