const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  // for (let value of actual) {
  for (let j = 0; j < actual.length; j++) {
    if (actual[j] !== expected[j]) {
      return false;
    }
  }
  return true;
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), true); // => should FAIL