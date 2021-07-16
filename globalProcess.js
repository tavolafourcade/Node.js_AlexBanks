// console.log(`Process object id -> ${process.pid}`)
// console.log(`Process object used to know the current version of NOde.js -> ${process.versions.node}`)

//Using process.argv to get information from the terminal
//First argument -> With this we can see the full path of where the Node process lives.
//Second argument -> Path to the current module being used.

// console.log(process.argv);

//Anything we type is added to the array
//For instance -> node globalProcess.js hola mundo

/*LEARNING DESTRUCTURING*/
// const [, ,firstName, lastName] = process.argv;
// console.log(`Your name is ${firstName} ${lastName}`);


//$ node globalProcess.js Octavio Lafourcade

/*Passing a flag to process.argv to let us know what variables we're passing*/
// $ node globalProcess.js --user Octavio --greetings "Hello World"
const grab = flag =>{
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

const greetings = grab('--greetings');
const user = grab('--user');

console.log(`${greetings} ${user}`)
//$ node globalProcess.js --user Octavio --greetings "Hello Friend"