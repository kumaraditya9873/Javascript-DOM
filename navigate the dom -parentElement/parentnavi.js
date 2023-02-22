let result = document.querySelector("h3");

let value = result.parentElement;

console.log(value);
value.style.color = "red";

let value1 = value.parentElement;
console.log(value1);
value1.style.color = "blue";

let value2 = value1.parentElement;
console.log(value2);
value2.style.color = "teal";

value.style.backgroundColor = "black";
value1.style.backgroundColor = "grey";
value2.style.backgroundColor = "pink";

// so here by selecting or putting the value of parentElement wee'll get out put as parent .
