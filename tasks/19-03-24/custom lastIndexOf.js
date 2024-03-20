// write a custom function for lastIndexOf

let str = "ankit paswan";
let val = "wan";
function lastIndexOf(str, val) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (str.substring(i, i + val.length) === val) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf(str, val));
