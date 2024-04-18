//17/04/24

//setInterval
let counter = 0;
setInterval(() => {
  console.log(counter++);
  let date = new Date();
  console.log(
    `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  );
}, 1000);
