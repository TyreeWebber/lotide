//create function that takes in 2 arrays
//return true or false based on perfect match
//if array1 !== array 2 assertion should fail
//if values within array1 & array2 aren't the same assertion should fail
//EDGECASE: if the function does not return true for nested arrays or arrays of objects that are identical
const eqArrays = function(actual, expected) {
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
module.exports = eqArrays;