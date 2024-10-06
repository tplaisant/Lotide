const assertEqual = function(actual, expected) {
  let thumbsUp = String.fromCodePoint(0x1F44D);
  let thumbsDown = String.fromCodePoint(0x1F44E);

  if (actual === expected) {
    console.log(`${thumbsUp}${thumbsUp}${thumbsUp} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${thumbsDown}${thumbsDown}${thumbsDown} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue  = function(object, expected) {
  for (let value in object) {
    if (object[value] === expected) {
      return value;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy"); //false
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); //true
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); //false