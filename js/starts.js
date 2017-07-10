// a sentence as a parameter 
//and returns the letter most words starts with

function starts(sentence) {
  var splitSen = sentence.split(' ');
  var map = {};
  var count= 0;
  var occursMost = '';
  
  splitSen.forEach(function(word) {
    var firstLetters = word[0].toLowerCase();
    if (map[firstLetters]) {
      map[firstLetters].push(word);
    }
  });
  console.log(map);
return occursMost;
};

console.log(starts('Soups sooo good in winter but summers no'));
module.exports = starts;
