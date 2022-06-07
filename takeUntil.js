// takeUntil
const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element in array) {
    if (callback(array[element]) === true) {
      break;
    } else {
      newArray.push(array[element])
    }
  } return newArray
};

module.exports = takeUntil;
