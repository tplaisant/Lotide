const assertArraysEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (eqArrays(actual, expected)){
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = function(actual, expected) {

  if (actual.length === expected.length) {
    for (let j = 0; j < actual.length; j++) {
      if (actual[j] !== expected[j]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const without = function(source, itemsToRemove) {
  let result = [];
  let addToResult = true;

  for (let j = 0; j < source.length; j++) {
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[j] === itemsToRemove[i]) {
        addToResult = false;
      }      
    }
    if (addToResult) {
      result.push(source[j]);
    }
    addToResult = true;
  }
  return result;
}

// TEST CODES
console.log(without([1, 2, 3], [1, 3])); // => [2]
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);