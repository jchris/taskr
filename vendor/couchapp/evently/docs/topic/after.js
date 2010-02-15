function() {
  // var app = $$(this).app;
  var self = $(this);
  setTimeout(function() {
    var s = $("#sidebar");
    $("pre", self).each(function() {
      var code = $(this);
      var js = code.text();
      var o = s.offset();
      var r = js.match(/\$\(\"\#(.*)\"\)/);
      if (r) {
        // $.log(o)
        var id = r[1];
        code.attr({id:"code-"+id});
        var example = $('<div class="example"><a class="run" href="#'+id+'">run <strong>#'+id+'</strong></a><div id="'+id+'"><strong>#'+id+'</strong> output will be here</div></div>');
        $("a.run", example).click(function(e) {
          e.preventDefault();
          var jc = $("#code-"+id);
          // $.log(jc)
          var js = $('textarea',jc).val() || jc.text();
          $('#'+id).unbind();
          try {
            eval(js);            
          } catch (e) {
            $('#'+id).html('<p>Error running #'+id+' code block:</p><p><pre>'+e.toSource()+'</pre></p>');
          }
        });
        example.offset({
          left: o.left
        });
        example.width(s.width()*0.75);
        code.before(example);
      }
      // setup the editor
      var edit = $('<a class="edit" href="#edit">edit code</a>');
      edit.click(function() {
        var code = $(this).prev('pre');
        var js = code.text();
        var lines = js.split('\n').length;
        var ta = $('<textarea rows="'+lines+'" class="code"></textarea>');
        ta.text(js);
        code.replace(ta);
        return false;
      });
      code.after(edit);
    });    
  }, 10);
};