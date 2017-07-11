// a sentence as a parameter 
//and returns the letter most words starts with

function starts(sentence) {
  var splitSen = sentence.split(' ');
  var map = {};
  var maxLength = 0;
  var occursMost = '';
  
  splitSen.forEach(function(word) {
    var firstLetters = word[0].toLowerCase();
    if (map[firstLetters]) {
      map[firstLetters].push(word);
    }
    else {
      map[firstLetters] = [];
      map[firstLetters].push(word);
    }
  });
  Object.values(map).forEach(function(array) {
  if (array.length > maxLength) {
    maxLength = array.length;
    occursMost = array[0][0].toLowerCase();
  }
});
return occursMost;
};

console.log(starts('cow cow fish bird cow dragon dragon dragon dragon dragon'));
module.exports = starts;
