/* CORE MODULES */
/* PATH */
const path = require('path');
const util = require('util');
const v8 = require('v8');

/* Using path module to access uploads directory */

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
//G:\Node.js_AlexBanks\www\files\uploads

/* UTIL */
util.log(path.basename(__filename));
util.log('^ The name of the current file')
//util provides the date of the log instead of console.log.


/* V8 */
util.log(v8.getHeapStatistics());
//We're seeing the memory usage and memory statistics


//We can also use destructuring with modules
//For instance
// const { log } = require('util');
// const { getHeapStatistics } = require('v8');
//Then
// log(getHeapStatistics());