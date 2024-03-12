//write a program to check number is palindrome or not.

let num = 121;
let temp = num;
let rev = 0;
while (num > 0) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.floor(num / 10);
}
if (temp == rev) {
  console.log("Number is palindrome.");
} else {
  console.log("Number is not palindrome.");
}
