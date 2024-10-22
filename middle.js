const eqArrays = require("./eqArrays");

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
  }
  return result;
}

module.exports = middle;