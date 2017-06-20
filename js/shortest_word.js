//takes a sentence as a parameter
//and returns the shortest word in it, and the length of the word

function shortest_word(string) {
  var newString = string.split(' ');
  var shortestWord = newString[1];
  var wordLength = 0;

  var wordAndLength = [];

  for(i=0; i<newString.length; i++) {
    if(shortestWord.length > newString[i].length) {
      shortestWord = newString[i];
      wordLength = newString[i].length;
    }
  }
  wordAndLength.push(wordLength)
  wordAndLength.push(shortestWord)
  return wordAndLength;
}

console.log(shortest_word('cow co c'));
module.exports = shortest_word;
