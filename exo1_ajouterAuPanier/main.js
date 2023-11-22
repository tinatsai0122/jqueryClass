const list = $("#list");

// $(".submit").click(function (event) {
//   event.preventDefault();
//   let newLi = $("<li>");
//   let userInputValue = $("#userInput").val();
//   newLi.text(userInputValue);
//   list.append(newLi);
//   $("#userInput").val("").focus();
// });

// $("button").click(function (event) {
//   event.preventDefault();
//   $("#list").append("<li>" + $("#userInput").val() + "</li>");
//   $("#userInput").val("").focus();
// });

$("button").on("click", function (event) {
  ajout(event);
});

function ajout(event) {
  event.preventDefault();
  $("#list").append("<li>" + $("#userInput").val() + "</li>");
  $("#userInput").val("").focus();
}
