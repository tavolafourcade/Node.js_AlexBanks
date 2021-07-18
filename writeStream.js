const fs = require('fs');

process.stdout.write('hello');
process.stdout.write(' world\n');

//We can use writeStream like stdout but the difference is that now we're writing output into a file.
const writeStream = fs.createWriteStream('./assets/myFile.txt', 'UTF-8');

//This will write in myFile.txt
writeStream.write('hello');
writeStream.write(' world!\n');

//We can use the terminal input to write into the file
// process.stdin.on('data', data =>{
//   writeStream.write(data);
// })

//We can work with readStream
const readStream = fs.createReadStream('./assets/lorum-ipsum.md', 'UTF-8')

// readStream.on('data', data =>{
//   writeStream.write(data);
// })

//We can work with other methods too such pipe
// process.stdin.pipe(writeStream)

//Also work with readStream and pipe
readStream.pipe(writeStream)
