const first = document.querySelector(".first");
first.style.color = "teal";

let second = first.nextElementSibling;
second.style.color = "orange";

let fourth = document.querySelector(".last");
fourth.style.color = "red";

let third = fourth.previousElementSibling;
third.style.color = "greenyellow";
