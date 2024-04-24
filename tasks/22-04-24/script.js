// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

// Update the time display
function updateTime() {
  const time = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
  document.getElementById("time").textContent = time;
}

// Increment time
function startWatch() {
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  seconds++;
  updateTime();
}

// Stop the stopwatch
function stopWatch() {
  isRunning = false;
  clearTimeout(watchInterval);
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("resetBtn").disabled = false;
}

// Start the stopwatch
document.getElementById("startBtn").addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;
    document.getElementById("resetBtn").disabled = false;
    watchInterval = setInterval(startWatch, 1000);
  }
});

// Stop the stopwatch
document.getElementById("stopBtn").addEventListener("click", stopWatch);

function reset() {
  isRunning = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  clearInterval(watchInterval);
  updateTime();
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("resetBtn").disabled = true;
}
document.getElementById("resetBtn").addEventListener("click", reset);

//style
let style = document.getElementById("time");

style.style.color = "white";
style.style.backgroundColor = "black";
style.style.textAlign = "center";
style.style.padding = "10px";
style.style.fontSize = "20px";
style.style.fontWeight = "bold";

let style1 = document.getElementsByTagName("button");

style1[0].style.margin = "10px";
style1[0].style.padding = "10px";
style1[0].style.justifyContent = "spacebetween";

style1[1].style.margin = "10px";
style1[1].style.padding = "10px";

style1[2].style.margin = "10px";
style1[2].style.padding = "10px";
