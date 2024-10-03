const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  let count  = 0;

  for (let item in itemsToCount) {

    if (itemsToCount[item]) {

      for (let name of allItems) {
        if (name === item) {
          count++;
        }      
      }
      if (count > 0) {
        result[item] = count;
        count = 0;
      }
    }
  }
  return result
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result2 = {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
};

const result1 = countOnly(firstNames, result2);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);