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

const middle = function(input) {
  let result = [];
  
  if (input.length > 2) {
    let mid = input.length / 2;

    if (Number.isInteger(mid)) {
      result.push(input[(mid - 1)]);
      result.push(input[mid]);
    } else {      
      result.push(input[Math.floor(mid)]);
    }
  } else {
    return result;
  }
  return result;
}

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2])); // => []