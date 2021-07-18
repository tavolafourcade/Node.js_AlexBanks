const fs = require('fs');

const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8');

let filetxt = '';

console.log('Type something...');
readStream.on('data', data =>{
  console.log(`I read ${data.length - 1} characters of text`);
  filetxt += data;
});

//Reading the first little bit of text
readStream.once("data", data =>{
  console.log(data);
})

//To know that the read event has completed
readStream.on('end',()=>{
  console.log('I finished reading the file');
  console.log(`In total I read ${filetxt.length-1} characters of text`)
})