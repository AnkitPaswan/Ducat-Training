// write a custom function for includes

let str = "ankit paswan";
let val = "a";
function include(str, val) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === val) {
      return true;
    }
  }
  return false;
}

console.log(include(str, val));
