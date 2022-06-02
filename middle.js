//eqArrays
const eqArrays = function (actual, expected) {
  let match = true;
  if (actual.length !== expected.length) {
    match = false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      match = false;
    }
  }
  return match;
};

//assertArrayEqual 
const assertArraysEqual = function (actual, expected) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `)
  }
};

//Middle
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

assertArraysEqual(middle([1, 2, 3]), [2]);
