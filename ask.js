const readline = require('readline');

//In order to use readline we must create an interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
//Now we can ask questions and collect input from the terminal.

rl.question("How do you like Node\n", answer => {
  console.log(`Your answer is: ${answer}`);
  process.exit();
});