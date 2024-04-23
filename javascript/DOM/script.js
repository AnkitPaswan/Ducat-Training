// //selectors
// let heading = document.getElementById("heading");
// console.log(heading);

// //get data
// console.log(heading.innerText);
// console.log(heading.innerHTML);

// //set data

// heading.innerText = "Hello World <button>Button<button";
// heading.innerHTML = "Hello World <button>Button<button>";

// //id
// console.log(heading.id);
// heading.id = "head";

// //class
// console.log(heading.className);

// heading.className = "red";
// console.log(heading.classList);

// heading.classList.add("red");
// heading.classList.remove("testing");
// heading.classList.toggle("red");

// //style
// console.log(heading.style);
// heading.style.backgroundColor = "red";
// heading.style.color = "white";
// heading.style.padding = "10px";

// //remove
// heading.remove();

// ------------------------------------------------------

//class
// let paragraphs = document.getElementsByClassName("red");
// console.log(paragraphs);

// paragraphs[0].innerHTML = "Testing";
// paragraphs[0].style.backgroundColor = "black";

// for (const element of paragraphs) {
//   element.innerHTML = "Testing";
//   element.style.backgroundColor = "black";
// }

//tags/element selector

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// paragraphs[0].innerHTML = "Testing";
// paragraphs[0].style.backgroundColor = "black";

// for (const element of paragraphs) {
//   element.innerHTML = "Testing";
//   element.style.backgroundColor = "black";
// }

//querySelector
// let heading = document.querySelector("#heading"); //id
// let paragraphs = document.querySelector(".red"); //class
// let paragraphs = document.querySelector("p"); //tag/element
// console.log(paragraphs);

//querySelectorAll
// let heading = document.querySelectorAll("#heading"); //id
// let paragraphs = document.querySelectorAll(".red"); //class
// let paragraphs = document.querySelectorAll("p"); //tag/element
// console.log(paragraphs);

//how to create element via dom
let div = document.createElement("div");
console.log(div);
heading.innerHTML = "Div cerated by dom";
div.className = "red";

let root = document.getElementById("root");
root.append(div);
root.prepend(div);
