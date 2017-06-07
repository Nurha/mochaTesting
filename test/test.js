var add = require('../js/add');
var hello = require('../js/hello');
var hello_uppercase = require('../js/hello_uppercase');

var assert = require('assert');

describe('Functions', function() {

  describe('add()', function() {
    it('should return 3 when adding 1 and 2', function() {
      assert.equal(3, add(1, 2));
    });
  });

  describe('hello()', function() {
    it('should return hello', function() {
      assert.equal('hello', hello());
    });
  });

  describe('hello_uppercase', function() {
    it('should return a sentence with a username', function() {
      assert.equal('Hello ICHIGO!', hello_uppercase('ichigo'));
    });
    it('should return HELLO!', function() {
      assert.equal('HELLO!', hello_uppercase());
    });
  });

});
