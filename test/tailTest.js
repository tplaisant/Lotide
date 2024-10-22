const assertEqual = require("../assertEqual");
const tail = require("../tail");

let result = tail(['Test', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
console.log('HERE');
let other = tail([5, 6]);
assertEqual(other[0], 6);
console.log('HERE');

result = tail(['Test']);
assertEqual(result.length, 0);

result = tail([]);
assertEqual(result.length, 0);

let newArray = ['TEST', 'LIGHTHOUSE', 'LABS'];
tail(newArray);
console.log(newArray);