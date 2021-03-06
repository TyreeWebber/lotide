const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetter');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArrayEqual,
  assertEqual,
  assertObjectsEqual,
  countLetter,
  countOnly,
  eqArrays,
  eqObjects,
  findKeyByValue,
  findKey,
  letterPositions,
  map,
  takeUntil,
  without
};
