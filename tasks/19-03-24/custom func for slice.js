//write the custom function for slice()

let str = "ankit paswan";

function mySlice(str, start, end) {
  let newStr = [];
  for (let i = start; i < end; i++) {
    newStr.push(str[i]);
  }
  return newStr;
}

console.log(mySlice(str, 0, 5));
