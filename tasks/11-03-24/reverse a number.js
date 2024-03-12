//write a program to reverse a number.

let num = 123;
let reverseNum = 0;
while (num > 0) {
  let remainder = num % 10;
  reverseNum = reverseNum * 10 + remainder;
  num = parseInt(num / 10);
}
console.log("reverse number is:", reverseNum);
