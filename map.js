const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);