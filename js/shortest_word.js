//takes a sentence as a parameter
//and returns the shortest word in it, and the length of the word

function shortest_word(string) {
  var newString = string.split(' ');
  var shortestWord = newString[0];
  var wordLength = shortestWord.length;

  var wordAndLength = [];

  for(i=0; i<newString.length; i++) {
    if(newString[i].length < wordLength) {
      shortestWord = newString[i];
      wordLength = shortestWord.length;
    }
  }
  wordAndLength.push(wordLength)
  wordAndLength.push(shortestWord)
  return wordAndLength;
}

console.log(shortest_word('I much cheese on the pizza'));
module.exports = shortest_word;


