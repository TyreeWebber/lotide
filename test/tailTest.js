const assert = require('chai').assert;
const tail = require('../tail');
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("it returns Lighthouse and Labs", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
}); 