$(document).ready(function() {
  $(".clickable").click(function() {
    $("#norway-showing").toggle();
    $("#norway-hidden").toggle();
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

