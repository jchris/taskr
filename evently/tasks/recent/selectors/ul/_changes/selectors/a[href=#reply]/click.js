function() {
  var li = $(this).parents("li");
  $("div.reply",li).evently(reply);
  return false;
}