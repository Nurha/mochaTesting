// Write a function that takes a sentence as a parameter.
// The function should return a map. 
// The keys of the map should be the first letters from the words in the sentence. 
// The values should be an array of any words in the sentence that start with the key of the map. 
// eg "Let's do this today" should return {"L" : ["Let's"], d : ["do"], "t" : ["this", "today"]}.

function letter_map(sentence) {
  var splitSen = sentence.split(' ');
  var map = {};
  
  splitSen.forEach(function(word) {
    var letter = word[0].toLowerCase();
    if (map[letter]) {
      map[letter].push(word);
    }
    //  otherwise create a key with the first letter of the word and assign an empty array to it
    // then push the word to the array
    else {
      map[letter] = [];
      map[letter].push(word);
    }
  });
return map;
};

console.log(letter_map('Let\'s do this today then see what happens tomorrow'))
module.exports = letter_map;
