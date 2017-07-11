// a sentence as a parameter 
//and returns the letter most words starts with

function starts(sentence) {
  var splitSen = sentence.split(' ');
  var map = {};
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
  console.log(array.length);
});

  // console.log(map);
  // console.log(Object.keys(map));
  // console.log(Object.values(map));
return occursMost;
};

console.log(starts('Soups sooo good in winter but summers no'));
module.exports = starts;
