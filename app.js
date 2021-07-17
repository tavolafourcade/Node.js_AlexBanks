const counter = require('./myModule');


counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCount());

/* USING DESTRUCTURING */
//const {inc, dec, getCount} = require("./myModule");
//inc();
//inc();
console.log(getCount());