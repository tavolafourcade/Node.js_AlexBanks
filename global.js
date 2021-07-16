const path = require('path');


console.log("Directory name",__dirname);
console.log("File name with the directory path", __filename);
console.log(`The file name is -> ${path.basename(__filename)}`);
