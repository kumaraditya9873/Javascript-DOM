// sibling represent the previous and after element ,text , white spaces and tags

// if want to target the second li and wanna give a red color

let first = document.querySelector("#first");
let second = first.nextSibling.nextSibling;
console.log(second);
second.style.color = "red";

first.style.color = "highlight";
let fourth = document.querySelector("#last");

let third = fourth.previousSibling.previousSibling;
console.log(third);

third.style.color = "pink";
fourth.style.color = "green";
