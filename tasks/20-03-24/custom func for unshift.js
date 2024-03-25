//write the custom function for unshift

let array = [20, 30, 40];
function myUnshift(arr, val) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = val;
  return arr;
}
console.log(myUnshift(array, 10));
