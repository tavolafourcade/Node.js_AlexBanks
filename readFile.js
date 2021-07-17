const fs = require('fs');

/* Reading the content of the file Readme synchronously */
//const text = fs.readFileSync('./assets/Readme.md', 'utf-8')
//console.log(text)

/* Reading the content of the file Readme Asynchronously */
fs.readFile('./assets/Readme.md', 'utf-8',(err, text)=>{
  if (err){
    throw err;
  }else{
    console.log('File contents');
    console.log(text)
  }
})
