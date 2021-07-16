/* BUILDING A SIMPLE QUESTION AND ANSWER APP */

// Using these to read and write data from the terminal.
// process.stdin
// process.stdout


/* process.stdout */
// process.stdout.write('Hello ');
// process.stdout.write('World \n');

const questions = [
  "What's your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?"
]

const ask = (i=0) => {
  process.stdout.write(`\n\n${questions[i]}`);
  process.stdout.write(` > `);
};

ask();