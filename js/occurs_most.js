// takes a sentence as a parameter 
// and returns the letter that occurs the most

function occurs_most(string) {
  string = string.replace(/\s+/g, '');
  var splitString = string.split('');
  var count = 0;

  splitString.forEach(function(letter) {
    console.log(letter);
    if (letter === splitString) {
      count++;
    }
  });
}
console.log(occurs_most('this letter occurs the  most in this string'));
module.exports = occurs_most;