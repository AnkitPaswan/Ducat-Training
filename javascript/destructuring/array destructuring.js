//27/03/24

//array destructuring
//in array distructuring based on indexing;
// let array = [10, 20, 30];

// // let [a, b, c] = array;
// let [a, , b, c = 0] = array;

// console.log(a, b, c);

//rest operator
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let [a, b, ...num] = array;
console.log(a, b, num);

/////
function addition(...nums) {
  let sum = 0;
  for (const value of nums) {
    sum += value;
  }
  console.log(sum);
}

addition(10, 20, 30);
