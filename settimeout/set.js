// setTimeout - runs function once after specific time

// ex
function greet() {
  console.log("hello there");
}

// greet();

// after applying setTimeout here the function runs on given specific time

setTimeout(greet(), 1000);
// here the function is running after 1 sec

////////////////////////////////
// set interval
function showScore() {
  console.log("hello");
}

setInterval(showScore, 2000);
// here after ever 2 sec of interval the function will run repeatedly

// examples of passing the arguments
function showPoints(name, points) {
  console.log(`the player name is ${name} and his score is ${points}`);
}

// setInterval(showPoints, 2000, "aditya", 35);
// const firstid = setInterval(showPoints, 2000, "aditya", 35);

// to cancel the interval same as setTimeout we can apply clearInterval
// clearInterval(firstid);
