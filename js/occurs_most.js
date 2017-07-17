// takes a sentence as a parameter 
// and returns the letter that occurs the most

function occurs_most(string) {
  string = string.replace(/\s+/g, '');
  var splitString = string.split('');
  var count = 0;
  var letterMap = {};
  var occursMost = '';

  splitString.forEach(function(letterA) {
    splitString.forEach(function(letter) {
      if (letterA === letter) {
        count++;
        letterMap[letterA] = count;
      };
    });
    count = 0;
  });

  var max = 0;
  for (x in letterMap) {
    if (letterMap[x] > max) {
      max = letterMap[x];
      occursMost = x;
    }
  }
  return occursMost;
  console.log(occursMost);
}
console.log(occurs_most('this letter occurs the most in this strinp'));
module.exports = occurs_most;