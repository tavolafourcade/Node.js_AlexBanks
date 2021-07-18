const fs = require('fs');

/* Renaming a directory */
//fs.renameSync('./storage-files','./storage')

/* First remove every file from the directory */
fs.readdirSync('./storage').forEach(fileName =>{
  fs.unlinkSync(`./storage/${fileName}`)
})

/* Remove a directory */
fs.rmdir('./storage', err=>{
  if(err){
    throw err;
  }
  console.log('./storage directory removed')
})