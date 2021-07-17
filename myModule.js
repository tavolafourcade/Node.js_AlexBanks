let count = 0;

const inc = () => ++count;
const dec = () => --count;
//The files that consume this module don't have access to the count so we need to create a function for returning the value of the count.

const getCount = () => count;

module.exports = {
  inc,
  dec,
  getCount
};