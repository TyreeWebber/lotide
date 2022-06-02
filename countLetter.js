const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected} `);
  } else if (actual !== expected) {
    console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected} `);
  }
};
//countLetters
function countLetter(string) {
  const result = {};
  
  for (const letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

//test
const actual = countLetter("lighthouse in the house")

assertEqual(actual['l'], 1)
assertEqual(actual[' '], undefined)
