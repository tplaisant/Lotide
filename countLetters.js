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
    let capitalLetter = letter.toUpperCase();
    if (capitalLetter !== ' '){
      if (result[capitalLetter] === undefined) {      
        result[capitalLetter] = 1;
      } else {
        result[capitalLetter] = result[capitalLetter] + 1;
      }    
    }
  }
  return result;
}

const result1 = countLetters('LHL');
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);

const result2 = countLetters('Lighthouse Labs');
assertEqual(result2["L"], 2);
assertEqual(result2["H"], 2);
assertEqual(result2["S"], 2);
assertEqual(result2["I"], 1);
assertEqual(result2["G"], 1);
assertEqual(result2["T"], 1);
assertEqual(result2["O"], 1);
assertEqual(result2["U"], 1);
assertEqual(result2["E"], 1);
assertEqual(result2["A"], 1);
assertEqual(result2["B"], 1);


const result3 = countLetters('Another test');
assertEqual(result3["T"], 3);
assertEqual(result3["E"], 2);
assertEqual(result3["A"], 1);
assertEqual(result3["N"], 1);
assertEqual(result3["O"], 1);
assertEqual(result3["H"], 1);
assertEqual(result3["R"], 1);
assertEqual(result3["S"], 1);