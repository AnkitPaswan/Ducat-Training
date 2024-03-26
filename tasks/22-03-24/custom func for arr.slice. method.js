//write the custom function for arr.slice()

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function sliceArr(arr, startIndex = 0, endIndex = arr.length) {
  let newArr = [];
  for (let i = startIndex; i < endIndex; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(sliceArr(arr, 0, 5));
