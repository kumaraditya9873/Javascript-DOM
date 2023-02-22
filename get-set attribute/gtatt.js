// get attribute()
// set attribute()

const links = document.querySelector(".first");

// console.log(links);

// to get the attribute of first li
const classValue = links.getAttribute("class");
console.log(classValue);

const buttons = document.querySelector("#btn");

const idValue = buttons.getAttribute("id");

console.log(idValue);

const alink = document.getElementById("link");

const showLink = alink.getAttribute("href");
console.log(showLink);
////////////////////////////////////////

// setAttribute()

// here we can set attribute

const secondlink = showLink.nextElementSibling;

secondlink.setAttribute("class", "fisrt");
// or we want to set text or modify text content in that attribute or li

secondlink.textContent = "i have changed the txt content";
console.log(secondlink);
