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
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // Check number of properties for both objects
  for (let key in object1) {    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // Check if both values from both objects are arrays
        if (!eqArrays(object1[key], object2[key])) return false;// Check if qty of elements and elements themselves inside the arrays are equal
    } else if (object1[key] !== object2[key]) return false; // Check if values are equal (when not an array)
  }
  return true; // If nothing is wrong, return 'true'
};
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)){
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);  
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = {
  name: 'fernanda',
  age: 34,
}
const object2 = {
  age: 34,
  name: 'fernanda',  
}

assertObjectsEqual(object1, object2);