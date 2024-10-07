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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) return false; // Check number of properties for both objects

  for (let key in object1) {    
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // Check if both values from both objects are arrays
      if (Object.keys(object1[key]).length !== Object.keys(object2[key]).length) { // Check number of values for both arrays
        return false;
      } else {
        if (!eqArrays(object1[key], object2[key])) return false;// Check if values inside the arrays are not equal
      }   
    }
    if (object1.key !== object2.key) return false; // Check if values are not equal
  }
  return true; // If nothing is wrong, return 'true'
};
// 1
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
//2
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);