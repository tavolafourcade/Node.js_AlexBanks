const cp = require("child_process");

const questionApp = cp.spawn('node', ['questions.js']);

questionApp.stdin.write('Octavio\n');
questionApp.stdin.write('Lima\n');
questionApp.stdin.write('Learn\n');

questionApp.stdout.on('data', data =>{
  console.log(`from the question app: ${data}`)
})

questionApp.on('close', ()=>{
  console.log(`questionApp process exited`);
});