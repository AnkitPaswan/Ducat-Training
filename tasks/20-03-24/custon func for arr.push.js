// write a custon function for arr.push() function

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(`Original Array : ${arr}`);
function customPush(arr, ...element) {
  arr[arr.length] = element;
  return arr;
}
let newArr = customPush(arr, 10);
console.log(`New Array : ${newArr}`);
