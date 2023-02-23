const first = document.getElementById("first");

const value = first.className;

console.log(value);

const second = document.getElementById("second");
const value1 = second.className;

console.log(value1);

// we can directly add the existing css properties

// ex

second.className = "colors";

// classList
const third = document.getElementById("third");
third.classList.add("colors");
const value2 = third.classList;

console.log(value2);
