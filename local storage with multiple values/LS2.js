// JSON.stringify() , JSON.parse()

const guys = ["john", "peter", "bob"];

// if we want to get array in local storage

localStorage.setItem("friends", JSON.stringify(guys));

const values = JSON.parse(localStorage.getItem("friends"));
console.log(values[2]);
