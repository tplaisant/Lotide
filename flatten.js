const flatten = function(input) {
  return [].concat(...input);
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]