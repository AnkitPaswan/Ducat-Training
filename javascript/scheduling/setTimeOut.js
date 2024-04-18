//17/04/24

//setTimeout

// setTimeout(() => {
//   console.log("setTimeOut called");
// }, 5000);

let counter = 0;
let interval = setInterval(() => {
  console.log(counter++);
}, 1000);

const cleartimeout = setTimeout(() => {
  clearInterval(interval);
  console.log("setTimeout called");
}, 5000);
clearTimeout(cleartimeout);
