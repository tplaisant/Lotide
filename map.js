const map = function(arr, cb) {
const results = [];
for (let item of arr) {
  results.push(cb(item));
}
return results;
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

const assertArraysEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (eqArrays(actual, expected)){
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["first", "test", "to", "be", "run"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);

// TEST CODE
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['f', 't', 't', 'b', 'r']);
