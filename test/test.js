var add = require('../js/add');
var hello = require('../js/hello');
var hello_uppercase = require('../js/hello_uppercase');
var hello_person = require('../js/hello_person');
var number_list = require('../js/number_list');
var sum_numbers = require('../js/sum_numbers');
var length = require('../js/length');
var upper = require('../js/upper');

var assert = require('assert');

describe('Functions', function() {

  describe('add()', function() {
    it('should return 3 when adding 1 and 2', function() {
      assert.equal(add(1, 2), 3);
    });
  });

  describe('hello()', function() {
    it('should return hello', function() {
      assert.equal(hello(), 'hello');
    });
  });

  describe('hello_uppercase', function() {
    it('should return a sentence with a username', function() {
      assert.equal(hello_uppercase('ichigo'), 'Hello ICHIGO!');
    });
    it('should return HELLO!', function() {
      assert.equal(hello_uppercase(), 'HELLO!');
    });
  });

  describe('hello_person', function() {
    it('should return HELLO! when username is MORGAN', function() {
      assert.equal( hello_person('MORGAN'), 'HELLO!');
    });
    it('should return HELLO! when username is PAUL', function() {
      assert.equal(hello_person('PAUL'), 'HELLO!');
    });
    it('should return Hello plus the username!', function() {
      assert.equal(hello_person('ichigo'), 'Hello ICHIGO!');
    });
  });

  describe('number_list()', function() {
    it('should return a list of numbers from one to ten', function() {
      assert.deepEqual(number_list(10), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
    });
  })

  describe('sum_numbers()', function() {
    it('should sum the number given', function() {
      assert.equal( sum_numbers(3), 6);
    });
  });

  describe('length()', function() {
    it('should find the length of a string', function() {
      assert.equal(length('I love you'), 10);
    });
  });

  describe('upper()', function() {
    it('should take a string and return it in uppercase letters', function() {
      assert.equal(upper('I love vegan food'), 'I LOVE VEGAN FOOD');
    });
  });

});
