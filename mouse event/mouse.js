// click -fires after full action occurs
// mousedown -button is pressed
// mouseup -button is released
// mousenter -moved onto an element
// ṃouseleave -moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hello world");
});

btn.addEventListener("mouseup", function () {
  console.log("is being up");
});

btn.addEventListener("mousedown", function () {
  console.log("is being down");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("red");
});
heading.addEventListener("mouseleave", function () {
  heading.classList.remove("red");
});
