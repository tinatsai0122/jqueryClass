let newLi = $("<li>");
let newLi2 = $("<li>item 1</li>");

$("#liste").append(newLi);
$("#liste").prepend(newLi2);

// $("#liste").append(newLi).append(newLi2);

$("<li>item 3</li>").appendTo("#liste");
$("<li>item 0</li>").prependTo("#liste");

let newP = $("<p>Ajout 1</p>");
$(".ma_section").after(newP);
$(".ma_section").before("<p>Ajout 2</p>");

$("<p>Ajout Before</p>").insertBefore(".ma_section");
$("<p>Ajout After</p>").insertAfter(".ma_section");

$("h3").replaceWith("<h2> h3 to h2 Un titre avec replace with </h2>");

$("#boutonTitre").click(function () {
  $("h2").replaceWith("<h3> h2 to h3 Un titre avec replace with </h3>");
});

$("<span>").replaceAll("section:eq(1) p");
