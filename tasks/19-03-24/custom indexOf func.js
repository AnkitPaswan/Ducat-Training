//write a custom indexOf function

let str = "ankit paswan";
let val = "a";

function indexOf(str, val) {
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + val.length) === val) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf(str, val));
