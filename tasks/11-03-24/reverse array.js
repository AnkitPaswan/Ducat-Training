// write a program to reverse an array without using reverse function.

let arr = [120, 250, 230, 150, 100];
//using reverse function
// let reverseArr = arr.reverse();
//console.log(reverseArr);
let len = arr.length;

for (let i = 0; i < len / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[len - 1 - i];
  arr[len - 1 - i] = temp;
}
console.log("reversed array is: ", arr);
