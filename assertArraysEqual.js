//assertArrayEqual 
const eqArrays = require('./eqArrays');
const assertArraysEqual = function( actual, expected) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `)
  }
};
module.exports = assertArraysEqual;