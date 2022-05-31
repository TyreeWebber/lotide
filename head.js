// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

const head = function(actual) {
  return actual[0];
};
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Stinky"]));
assertEqual(head[""]);