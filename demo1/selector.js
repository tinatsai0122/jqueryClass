const mesP = $("p");
const mesP2 = $("p")[1];
console.log("mesP:>>", mesP);
console.log("mesP:>>", mesP2);

// console.log($("#main"));
// console.log($("div"));
console.log($("p:first-child"));
console.log($("div p"));

console.log($("div p:odd"));

const container = $("#main:eq(0)");
console.log("container:>>", container);

const C1 = container.find(".ma_section").css("background-color", "red");
console.log("C1:>>", C1);

// $(".to-hide").each(function () {
//   $(this).hide();
// });

// $(".to-hide").hide();

let mot = "refrigerateur";
let motInverse = mot.split("").reverse().join("");
console.log("motInverse:>>", motInverse);

$("section").has(".p").css("background-color", "green");

if ($("#main p").is(".to_hide")) {
  alert("Des elements sont cachés");
}
