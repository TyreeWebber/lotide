const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays(["Stickbug", "Stinkbug", "Bugbug"], ["Stickbug", "Stinkbug", "Bigbug"]), true);