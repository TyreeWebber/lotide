const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let newArray = [];
  let midPoint = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    return newArray;
  }
  else if (array.length % 2 === 1) {
    newArray.push(array[midPoint]);
  }
  else if (array.length % 2 === 0) {
    newArray.push(array[midPoint - 1]);
    newArray.push(array[midPoint]);
  }
  return newArray;
};
module.exports = middle;
