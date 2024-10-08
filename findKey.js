const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, cb) {
  for (let key in obj) { // Iterate through Obj
    for (let element in obj[key]) { // Iterate through values (which should be inside another object)
      if (cb(obj[key])) {
        return key; // Return the first positive match
      }
    }
  }
  return undefined;
}

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
), "noma") // True

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
), "Akaleri") // True

assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1
), "elBulli") // False