/* CORE MODULES */
/* PATH */
const path = require('path');
const util = require('util');

/* Using path module to access uploads directory */

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

console.log(dirUploads);
//G:\Node.js_AlexBanks\www\files\uploads

/* UTIL */
util.log(path.basename(__filename));
util.log('^ The name of the current file')
//util provides the date of the log instead of console.log.
