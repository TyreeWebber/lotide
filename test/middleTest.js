const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("it returns the middle value of an array if there is one", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });
}); 