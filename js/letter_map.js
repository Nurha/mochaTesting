// Write a function that takes a sentence as a parameter.
// The function should return a map. 
// The keys of the map should be the first letters from the words in the sentence. 
// The values should be an array of any words in the sentence that start with the key of the map. 
// eg "Let's do this today" should return {"L" : ["Let's"], d : ["do"], "t" : ["this", "today"]}.

function letter_map(string) {
  var words = string.split(' ');
  var letter = '';
  var letters = [ ];
  var letterObj = { };

  for (i=0; i<words.length; i++) {
    letter += words[i].substring(0,1);
    letters.push(letter[i]);
    letterObj[letters[i]] = [ ];
  }

   console.log(letterObj);
}
console.log(letter_map('Let\'s do it today'));

module.exports = letter_map;