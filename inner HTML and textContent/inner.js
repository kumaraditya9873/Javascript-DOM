//  innerHTML
//  textContent

var list = document.getElementById("first");
var div = document.getElementById("second");
var item = document.querySelector(".item");

console.log(div.textContent);
// it shows the text content contain in the div

console.log(list.innerHTML);
// it shows up the whole HTML structure

// shortcut to create an element using innerHTML

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item3</li>
      <li>list item4</li><li>list item5</li>`;

document.body.appendChild(ul);
// this is how we can create list item using innerHTML
