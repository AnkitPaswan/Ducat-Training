//write the custom function for arr.findLastIndex()

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 50, 100];

function findLastIndex(arr, element) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}
console.log(findLastIndex(arr, 50));
