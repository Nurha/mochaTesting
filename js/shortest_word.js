//takes a sentence as a parameter
//and returns the shortest word in it, and the length of the word

//split the string
//loop though the split words
//have a variable hold a word and compare it to a word in the sentence
//holding the shortest word every time until it is done looping
//once it has the shortest word find the length of that word


function shortest_word(string) {
  var newString = string.split(' ');
  var shortestWord = newString[0];
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

console.log(shortest_word('ate so much cheese on the pizza'));
module.exports = shortest_word;
