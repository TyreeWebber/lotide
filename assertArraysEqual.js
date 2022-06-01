//eqArrays function
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

//assertArrayEqual 
const assertArraysEqual = function( actual, expected) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `)
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `)
  }
};

assertArraysEqual(["stickbug", "stinkbug", "bugbug"], ["stickbug", "stinkbug", "bugbug"]);
assertArraysEqual(["stickbug", "stinkbug", "bugbug"], ["stickbug", "stinkbug", "bug"]);