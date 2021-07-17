const waitTime = 5000;
console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
  //Clearing the interval as soon the waitTime is fulfilled.
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log('done');
}

setTimeout(timerFinished, waitTime);

//Creating an interval timer
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime/waitTime)*100);
  // console.log(`waiting ${currentTime/1000} seconds`);
  process.stdout.clearLine();
  process.stdout.cursorTo(0); //It moves the cursor to 0
  process.stdout.write(`waiting...${p}%`) //Override the %  
}

const interval = setInterval(incTime,waitInterval);



