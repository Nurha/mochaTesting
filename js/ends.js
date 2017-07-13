// takes a sentence as a parameter 
// and returns the letter most words end with

function ends(string) {
  var splitString = string.split(' ');
  //console.log(splitString)
  var map = {};
  var maxLength = 0;
  var occursMost = '';

  splitString.forEach(function(word) {
    //console.log(word);
    var lastLetters = word[word.length - 1];
    //console.log(lastLetters)
    if (map[lastLetters]) {
      map[lastLetters].push(word);
    } else {
      map[lastLetters] = []
      map[lastLetters].push(word);
    }
  });
  console.log(map)

  Object.values(map).forEach(function(array) {
    // console.log(array)
    if (array.length > maxLength) {
      maxLength = array.length;
      occursMost = array[0][array.length - 1].toLowerCase();
    }
  });
  return occursMost;
}

console.log(ends('heds ss end of the dayd sss ss'));
module.exports = ends;
