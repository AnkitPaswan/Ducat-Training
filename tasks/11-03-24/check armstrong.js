//write a program to check number is armstrong or not.

let num = 153;
let sum = 0;
let temp = num;
while (temp > 0) {
  let remainder = temp % 10;

  sum = sum + remainder * remainder * remainder;
  // sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10); // convert float into integer
}
if (sum == num) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}
