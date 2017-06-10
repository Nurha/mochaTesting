//takes a sentence as a parameter
//and returns the sum of the length of words in it

function sum_word_len(string) {

  var sumNumbers = 0;

  var stringNumber = string.split(' ').length;

  for (i=0; i<=stringNumber; i++) {
    sumNumbers += i;
  }
  return sumNumbers;
}

console.log(sum_word_len('cow cow cow'));

module.exports = sum_word_len;
