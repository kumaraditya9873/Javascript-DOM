// create element
const result = document.querySelector("#result");
const first = document.querySelector(".red");

var divtag = document.createElement("div");

console.log(divtag);

var text = document.createTextNode("this is ther text which is inside the div");

console.log(text);

divtag.appendChild(text);
document.body.insertBefore(divtag, result);

// document.body.appendChild(divtag);

// createTextNode("text element")

// element.appendChild(childElement)

const heading = document.createElement("h2");

const headingTxt = document.createTextNode(
  "this is the txt written inside the heading"
);

heading.appendChild(headingTxt);

heading.classList.add("blue");
result.insertBefore(heading, first);

// result.appendChild(heading);

//////////////////////////////////////////////

// insertBefore('element','location')
// :- this methd have two parameter one the element which is to be inserted and the second one is location where it should be inserted
