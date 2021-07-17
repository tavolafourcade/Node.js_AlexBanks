const fs = require('fs');

/* Reading the content of the file Readme synchronously */
const text = fs.readFileSync('./assets/Readme.md', 'utf-8')
console.log(text)
