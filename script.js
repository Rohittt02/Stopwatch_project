// Variables to store stopwatch status
let seconds = 0, minutes = 0, hours = 0;
let timer;
let isRunning = false;

// Start function
function start() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(run, 1000);
  }
}

// Run stopwatch function
function run() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  document.getElementById('display').textContent = getTimer();
}

// Stop function
function stop() {
  clearInterval(timer);
  isRunning = false;
}

// Reset function
function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0; minutes = 0; hours = 0;
  document.getElementById('display').textContent = getTimer();
}

// Format the timer to string
function getTimer() {
  return (hours < 10 ? "0" + hours : hours)
    + ":" + (minutes < 10 ? "0" + minutes : minutes)
    + ":" + (seconds < 10 ? "0" + seconds : seconds);
}