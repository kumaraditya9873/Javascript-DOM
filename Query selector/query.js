let main = document.querySelector("#main");

main.style.backgroundColor = "pink";

let alter = document.querySelectorAll(".alter");
alter.forEach(function (all) {
  console.log(all);
  all.style.color = "yellow";
});

let single = document.querySelector("li:last-child");

single.style.color = "red";
let lastitem = document.querySelectorAll(".lastitem");
lastitem.forEach(function (all) {
  console.log(all);
  all.style.color = "white";
});
