$(document).ready(function() {
  $(".clickable").click(function() {
    $("#norway-showing").slideToggle();
    $("#norway-hidden").slideToggle();
  });
  $(".clickable1").click(function() {
    $("#germany-showing").slideToggle();
    $("#germany-hidden").slideToggle();
  });
  $(".clickable2").click(function() {
    $("#netherlands-showing").slideToggle();
    $("#netherlands-hidden").slideToggle();
  });
});

