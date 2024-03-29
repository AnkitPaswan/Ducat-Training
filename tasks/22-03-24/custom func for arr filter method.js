//write the custom function for array filter

let arr = [10, 20, 30, 40, 50, 60, 70, 40, 80, 40, 90, 100];
function myFilter(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//custom filter to get even numbers from the array
console.log(myFilter(arr, (x) => x === 40));
