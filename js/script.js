$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable1").click(function() {
    $("#aardvark-showing").slideToggle();
    $("#aardvark-hidden").slideToggle();
  });
});

