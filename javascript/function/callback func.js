//12/03/24

//callback function
// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 5);
// console.log(result);

//callback function
function add(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

add(5, 5, function (sum) {
  console.log(sum);
});
