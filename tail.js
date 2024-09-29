const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inputArray) {
  let result = inputArray.splice(1);
  return result;
};

let result = tail(['Test', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');

result = tail(['Test']);
assertEqual(result.length, 0);

result = tail([]);
assertEqual(result.length, 0);