//11/03/24

//global scope or global variable

let sum = 0; //global variable
function add(a, b) {
  //a,b are local variable
  sum = a + b;
}

add(10, 20);
console.log(sum); //global scope
