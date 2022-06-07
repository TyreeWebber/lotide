//assertEqual Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};
//eqArrays Function
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//eqObjects Function
const eqObjects = function(object1, object2) {
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  }
  for (const item of Object.keys(object1)) {
    if (object1[item] !== object2[item]) {
      result = false;
    }
    if (Array.isArray(object1[item]) === true && Array.isArray(object2[item]) === true) {
      if (eqArrays(object1[item], object2[item]) === true) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};
//Test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // should be true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // should be false