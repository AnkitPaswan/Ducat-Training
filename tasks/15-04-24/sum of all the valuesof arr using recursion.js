//write a program to sum all the values of arrays using recursion

let arr = [10, 20, 30, 40, 50];
// let sum = 0;

function sumArray(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }
}

console.log(sumArray(arr));
