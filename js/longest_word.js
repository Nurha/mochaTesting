//takes a sentence as a parameter
//and returns the longest word in it, and the length of the word

function longest_word(string) {
   var splitString = string.split(' ');

   var maxLength = 0;
   var word = ' ';

   var wordAndLength = [];

  for (i=0; i<splitString.length; i++) {
    if (splitString[i].length > maxLength) {
      maxLength = splitString[i].length;
      word = splitString[i];
    }
  }

  wordAndLength.push(maxLength);
  wordAndLength.push(word);
  return wordAndLength;
}

console.log(longest_word('Almond mozzarella cheese pizza'));

module.exports = longest_word;
