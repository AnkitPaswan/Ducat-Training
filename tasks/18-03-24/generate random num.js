// write a program to generate only six digits number

const num = Math.floor(Math.random() * 1000000);
while (num.toString().length < 6) {
  num = num;
}
console.log(num);
