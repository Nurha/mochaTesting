// takes a sentence as a parameter 
// and returns the letter that occurs the least
 
function occurs_least(string) {
  string = string.replace(/\s+/g, '');
  var letterMap = {};

  for (i=0; i<string.length; i++) {
    var letter = string[i];
    letterMap[letter] = (letterMap[letter] || 0) + 1;
  }
  console.log(letterMap);
}

console.log(occurs_least('Q is the letter that is ooccuuring the least in this string '));
module.exports = occurs_least;
