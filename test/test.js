var add = require('../js/add');
var hello = require('../js/hello');
var hello_uppercase = require('../js/hello_uppercase');
var hello_person = require('../js/hello_person');
var number_list = require('../js/number_list');
var sum_numbers = require('../js/sum_numbers');
var length = require('../js/length');
var upper = require('../js/upper');
var reverse = require('../js/reverse');
var hello_list = require('../js/hello_list');
var high_low = require('../js/high_low');
var count_words = require('../js/count_words');
var sum_word_len = require('../js/sum_word_len');
var longest_word = require('../js/longest_word');
var shortest_word = require('../js/shortest_word');
var word_length = require('../js/word_length');
var avg = require('../js/avg');
var tri = require('../js/tri');

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
      assert.equal(length('I love you'), 3);
    });
  });

  describe('upper()', function() {
    it('should take a string and return it in uppercase letters', function() {
      assert.equal(upper('I love vegan food'), 'I LOVE VEGAN FOOD');
    });
  });

  describe('reverse()', function() {
    it('should reverse a given string', function() {
      assert.equal(reverse('Pingo chips is yummy'), 'ymmuy si spihc ogniP');
    });
  });

  describe('hello_list', function() {
    it('should print hello for the number of times in the parameter', function () {
      assert.deepEqual(hello_list(2), ['hello', 'hello']);
    });
  });

  describe('high_low', function() {
    it('should print the highest and lowest numbers of a given array', function () {
      assert.deepEqual(high_low(1, 78, 29, 4), [78, 1]);
    });
  });

  describe('count_words()', function() {
    it('it should count the words in a string', function() {
      assert.equal(count_words('I love vegan food'), 4);
    });
  });

  describe('sum_word_len()', function() {
    it('should sum the length of a string', function() {
      assert.equal(sum_word_len('cow cow cow'), 9);
    });
  });

  describe('longest_word()', function() {
    it('should find the longest word in a string with number and letters in that string', function() {
      assert.deepEqual(longest_word('Almond mozzarella cheese pizza'), [10, 'mozzarella']);
    });
  });

  describe('shortest_word()', function() {
    it('should find the shortest word and return it with it\'s length', function() {
      assert.deepEqual(shortest_word('ate so much cheese on the pizza'), [ 2, 'so']);
    });
  });

  describe('word_length()', function() {
    it('should return string average number rounded up and down', function() {
      assert.deepEqual(word_length('cow cow cow love patty'), [ 4, 3 ]);
    });
  });

  describe('avg()', function() {
    it('should return the average of the length of a string rounded up', function() {
      assert.equal(avg('hello happy cow from space'), 5);
    });
  });

  describe('tri()', function() {
    it('should create a triangle shape using *', function() {
      assert.deepEqual(tri(), '\n*\n**\n***\n****\n');
    });
  });

});
