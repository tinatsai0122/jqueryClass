$("p").click(function () {
  $(this).hide();
});

// $("button").click(function () {
//   $("#myInput").val("modified the input value");
//   $("#main").toggle();
// });

$("button").on("click", modifInput);
function modifInput() {
  $("#myInput").toggle();
}
