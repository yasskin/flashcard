//Toggles all elements, needs to have show-hide correspondance

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#show-card-1").toggle();
    $("#hide-card-1").toggle();
    $("#show-card-2").toggle();
    $("#hide-card-2").toggle();
    $("#show-card-3").toggle();
    $("#hide-card-3").toggle();
  });
});
