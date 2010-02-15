function() {
  // var app = $$(this).app;
  var self = $(this);
  setTimeout(function() {
    var s = $("#sidebar");
    $("pre", self).each(function() {
      var code = $(this);
      var js = code.text();
      var o = code.offset();
      var r = js.match(/\$\(\"\#(.*)\"\)\.evently/);
      if (r) {
        // $.log(o)
        var example = $('<div><a class="run" href="#'+r[1]+'">run <strong>#'+r[1]+'</strong></a><div id="'+r[1]+'"><strong>#'+r[1]+'</strong> output will be here</div></div>');
        $("a.run", example).click(function(e) {
          e.preventDefault();
          try {
            eval(js);            
          } catch (e) {
            $('#'+r[1]).html('<p>Error running #'+r[1]+' code block:</p><p><pre>'+e.toSource()+'</pre></p>');
          }
        });
        example.offset({
          top: o.top
        });
        example.hide();
        s.append(example);
        example.show("slow")
      }
    });    
  }, 10);
};