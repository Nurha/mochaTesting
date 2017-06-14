// takes a sentence as a parameter 
// and returns the average word length rounded up and rounded down
// sum up all the numbers and divide by the amount of numbers

function word_length(string) {

  var splitString = string.split(' ');
  var wordsLength = 0;

  for (i=0; i<splitString.length; i++) {
    wordsLength += splitString[i].length;
  }
  return wordsLength;
}

console.log(word_length('I love food i'));

module.exports = word_length;