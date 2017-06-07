var add = require('../js/add')

var assert = require('assert');

describe('Functions', function() {
  describe('add()', function() {
    it('should return 3 when adding 1 and 2', function() {
      assert.equal(3, add(1, 2));
    });
  });

});
