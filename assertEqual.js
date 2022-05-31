// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Tyree", "Tyson");
assertEqual("tyreeisanokaycoder", "TyreeIsAnOkayCoder");
assertEqual("Kendra is a stinky", "Kendra is a stinky");