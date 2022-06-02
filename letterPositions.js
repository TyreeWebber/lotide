//assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(expected, actual)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

//eqArrays Function
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

//letterPositions Function
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results !== sentence[i]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").o, [4]);
