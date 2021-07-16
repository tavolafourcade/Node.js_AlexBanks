// console.log(`Process object id -> ${process.pid}`)
// console.log(`Process object used to know the current version of NOde.js -> ${process.versions.node}`)

//Using process.argv to get information from the terminal
//First argument -> With this we can see the full path of where the Node process lives.
//Second argument -> Path to the current module being used.
console.log(process.argv);

//Anything we type is added to the array
//For instance -> node globalProcess.js hola mundo
