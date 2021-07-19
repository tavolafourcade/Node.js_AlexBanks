const cp = require('child_process');

// cp.exec("open https://www.linkedin.com/feed/");
// cp.exec("open -a Terminal .")


// Executing ls
// cp.exec("ls", (err,data)=>{
//   if(err){
//     throw err
//   }
//   console.log(data);
// })

//Reading node readStream
cp.exec('node readStream', (err, data, stderr)=>{
  console.log(data)
})