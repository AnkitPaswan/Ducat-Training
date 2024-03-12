//write a program to get the maximum value in an array.

//using max function
// let arr = [10, 20, 5, 8, 15];
// let max = Math.max(...arr);
// console.log(max);

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("max value is:", max);
