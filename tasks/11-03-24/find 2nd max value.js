// write a program to get the second maximum value in an array

let arr = [10, 20, 5, 8, 15, 100, 80, 23, 11, 2];
let max = arr[0];
let secondMax = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax) {
    secondMax = arr[i];
  }
}
console.log("2nd max value is:", secondMax);
