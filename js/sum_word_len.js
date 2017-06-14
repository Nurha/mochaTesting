//takes a sentence as a parameter
//and returns the sum of the length of words in it

function sum_word_len(string) {

  var splitString = string.split(' ');
  console.log(splitString);
  var sumWords = 0;

  for (i=0; i<splitString.length; i++) {
    sumWords += splitString[i].length;
  }
  return sumWords;
}

console.log(sum_word_len('Hello human, I am an alien')),

module.exports = sum_word_len;

