# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @TyreeWebber/lotide`

**Require it:**

`const _ = require('@TyreeWebber/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual`: When passed two arrays determines whether they are equals.
* `assertEqual`: When passed two strings determines whether they are equals.
* `assertObjectsEqual`: When passed two objects determines whether they are equals.
* `countLetter`: Takes a string and counts the number of letters within the string.
* `countOnly`: Takes an array of strings and returns the specified itemsToCount from the object.
* `eqArrays`: Takes two arrays and outputs whether they are equal.
* `eqObjects`: Takes two objects and outputs whether they are equal.
* `findKey`: Takes in an object and a value key and returns the key.
* `findKeyByValue`: Takes in an object and a value and outputs the key for the given value.
* `head`: Returns the first item of an array.
* `letterPositions`: Takes a string and returns an object containing how many times each letter in the string occurs.
* `map`: Takes in an array of numbers or strings and returns a value for each item in the array of the index.
* `middle`: Takes an array and returns the middle value.
* `tail`: Returns every value except the first of an array.
* `takeUntil`: Takes an array and creates a new array stopping at the callback value.
* `without`: Takes an array and returns a new array without the value being removed.