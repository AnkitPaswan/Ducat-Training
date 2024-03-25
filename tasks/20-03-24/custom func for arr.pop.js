//write a custom function for array.pop function

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function myPop(arr) {
  arr = arr.slice(0, arr.length - 1);
  return arr;
}

console.log("Original Array: ", myPop(arr));
