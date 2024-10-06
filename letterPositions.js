const letterPositions = function (sentence) {
  const results = {};
  let count = 0;
  let value = [];

  for (let letter of sentence) {
    value.push(count);
    if (letter !== ' '){
      if (!results[letter]) {
        results[letter] = value;
      } else {
        results[letter].push(count);
      }    
    }
    value = [];
    count++;
  }
  return results;
}

console.log(letterPositions("lighthouse in the house"));