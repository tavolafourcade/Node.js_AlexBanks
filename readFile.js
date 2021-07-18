const fs = require('fs');

/* Reading the content of the file Readme synchronously */
//const text = fs.readFileSync('./assets/Readme.md', 'utf-8')
//console.log(text)

/* Reading the content of the file Readme Asynchronously */
// fs.readFile('./assets/Readme.md', 'utf-8',(err, text)=>{
//   if (err){
//     throw err;
//   }else{
//     console.log('File contents');
//     console.log(text)
//   }
// })

/* Reading binary files as images */
fs.readFile('./assets/alex.jpg',(err, img)=>{
  if (err){
    console.log(`An error has ocurred: ${err.message}`);
    process.exit();
  }else{
    console.log('File contents');
    console.log(img)
  }
})