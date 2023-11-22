const list = $("#list");

// for (let i = 1; i < 6; i++) {
//   let newLi = $("<li>").text("Task " + i);
//   list.append(newLi);
// }

// $(".submit").click(function (event) {
//   event.preventDefault();
//   let newLi = $("<li>");
//   let userInputValue = $("#userInput").val();
//   newLi.text(userInputValue);
//   list.append(newLi);
//   $("#userInput").val("").focus();
// });

$("button").click(function (event) {
  event.preventDefault();
  $("#list").append("<li>" + $("#userInput").val() + "</li>");
  $("#userInput").val("").focus();
});
