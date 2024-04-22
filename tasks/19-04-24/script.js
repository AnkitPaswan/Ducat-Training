let div = document.getElementById("live-watch");
function time() {
  div.innerHTML = "";
  let date = new Date();
  let sec = date.getSeconds();
  let min = date.getMinutes();
  let hr = date.getHours();
  let d = date.getDate();
  let mo = date.getMonth() + 1;
  let yr = date.getFullYear();
  div.innerHTML =
    "Current Time : " +
    hr +
    ":" +
    min +
    ":" +
    sec +
    " , " +
    d +
    "/" +
    mo +
    "/" +
    yr;
}

setInterval(time, 1000);

//class
div.className = "black";
console.log(div.classList);
div.classList.add("black");

//style
console.log(div.style);
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.padding = "10px";
div.style.borderRadius = "20px";
div.style.textAlign = "center";
