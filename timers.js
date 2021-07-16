const waitTime = 3000;
console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
  //Clearing the interval as soon the waitTime is fulfilled.
  clearInterval(interval);
  console.log('done');
}

setTimeout(timerFinished, waitTime);

//Creating an interval timer
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  console.log(`waiting ${currentTime/1000} seconds`);
}

const interval = setInterval(incTime,waitInterval);