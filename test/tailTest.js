const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 'Labs' for ['Test', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Test', 'Lighthouse', 'Labs']), 'Labs');
  });
  it("returns '6' for [5, 6]", () => {
    assert.strictEqual(tail([5, 6]), 6);
  });  
  it("returns '4' for [1, 2, 4]", () => {
    assert.strictEqual(tail([1, 2, 4]), 4);
  });    
})