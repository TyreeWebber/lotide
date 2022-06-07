const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let object = eqObjects(actual, expected);
  if (object === true) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)} `);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} !== ${inspect(expected)} `);
  }
};

const object1 = {
  val1: ["Tyree", "Kendra"],
  val2: ["Orange", "Dino"]
};
const object2 = {
  val1: ["Tyree", "Kendra"],
  val2: ["Orange", "Dino"]
};
console.log(assertObjectsEqual(object1, object2));