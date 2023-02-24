// dom events pass an Event object as an arguments to handelers
// this objects contains extra information about the event that ocuured
// event.type
// event.currentTarget
// this keyword
// example = addEventListner("Click",function("any keyword that you want too see the object"){})

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");
heading.addEventListener("click", function (ev) {
  console.log(ev.currentTarget);
});

btn.addEventListener("click", function (ev) {
  console.log(ev.currentTarget);
});

function somefunction(e) {
  e.preventDefault();
}

link.addEventListener("click", somefunction);
