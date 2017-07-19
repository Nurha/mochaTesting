// takes a sentence as a parameter 
// and returns the letter that occurs the least
 
function occurs_least(string) {
  string = string.replace(/\s+/g, '');
  var splitString = string.split('');
  var letterMap = {};

  splitString.forEach(function(letter) {
    letterMap[letter] = (letterMap[letter] || 0)  + 1;
  });

  Object.values(letterMap).forEach(function(letterMapVal) {
    console.log(letterMapVal);
  });

}

console.log(occurs_least('Q is the letter that is ooccuuring the least in this string '));
module.exports = occurs_least;
