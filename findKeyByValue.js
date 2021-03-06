//assertEqual Function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};

//findKeyByValue Function
findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value){
      return key;
    }
  }
};

//tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);