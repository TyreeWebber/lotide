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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

const without = function(source, itemsToRemove) {
  let array = source;

  for (let i = 0; i <= itemsToRemove.length; i++) {
    const index = source.indexOf(itemsToRemove[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

//tests
console.log(without([1, 2, 3], [2])); // ==> [1, 3]
console.log(without(["stickbug", "stinkbug", "bugbug"], ["bugbug"])); // ==> ["stickbug", "stinkbug"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);