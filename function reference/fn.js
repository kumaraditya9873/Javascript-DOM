const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

// btn.addEventListener("click", function () {
//   heading.classList.add("red");
// });

function changecolors() {
  let classPresent = heading.classList.contains("red");
  if (classPresent) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changecolors);
