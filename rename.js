const fs =require('fs');
const { setTimeout } = require('timers');

/* Synchronous version to rename a file */
fs.renameSync('./assets/colors.json', './assets/colorData.json')


/* Asynchronous version to rename a file */
// Asynchronous functions have a callback at the end for errors
//The rename function can also be used to move files.
fs.rename('./assets/notes.md','./storage-files/notes.md', err=>{
  if(err){
    throw err;
  }
})

/* Deleting alex.jpg */
setTimeout(()=>{
  fs.unlinkSync('./assets/alex.jpg');
}, 4000)