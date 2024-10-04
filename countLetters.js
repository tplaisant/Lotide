const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let result = {};

  for (let letter of sentence) {
    if (result[letter] === undefined) {      
      result[letter] = 1;
    } else {
      result[letter] = result[letter] + 1;
    }    
  }
  return result;
}

const result1 = countLetters('LHL');

assertEqual(result1["L"], 2);