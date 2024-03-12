// write a program to get the minimum value in an array without using min function

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("min value is:", min);
