// two types of storage are there
//  local storage session storage
// setItem ,getItem , removeItem , clear

// if we want to set any value for in the local storage

localStorage.setItem("name", "aditya");

localStorage.setItem("job", "developer");

localStorage.setItem("address", "India");

// how to get these value in console

let name = localStorage.getItem("name");
console.log(name);

let jobs = localStorage.getItem("job");
console.log(jobs);

let address = localStorage.getItem("address");
console.log(address);

// if we want to clear up the local storage

localStorage.clear();
