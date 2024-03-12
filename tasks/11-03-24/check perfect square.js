//write a program to check the number is perfect square number or not.

let num = 16;
let sqrt = Math.sqrt(num);
if (sqrt * sqrt == num) {
  console.log(`${num} is a perfect square number`);
} else {
  console.log(`${num} is not a perfect square number`);
}
