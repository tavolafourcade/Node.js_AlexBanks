const fs = require('fs');
//Blocking synchronously
console.log('started reading files')
//const files = fs.readdirSync('./assets');

//Non blocking Asynchronously

fs.readdir('./assets', (err, files)=>{
  if (err){
    throw err;
  }
  console.log('complete')
console.log(files);
});
