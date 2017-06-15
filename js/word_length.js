// takes a sentence as a parameter 
// and returns the average word length rounded up and rounded down
// sum up all the numbers and divide by the amount of numbers

function word_length(string) {
  
  var splitString = string.split(' ');
  var sumWordsLength = 0;
  var numberOfWords = string.split(' ').length;
  //console.log(numberOfWords);
  var averageNumber = 0;

  var averageRoundedUpAndDown = [];

  for (i=0; i<splitString.length; i++) {
    sumWordsLength += splitString[i].length;
    //console.log(sumWordsLength);
  }
  
  averageNumber = sumWordsLength / numberOfWords;
  var averageRoundedUp = Math.ceil(averageNumber);
  var averageRoundedDown = Math.floor(averageNumber);
  averageRoundedUpAndDown.push(averageRoundedUp);
  averageRoundedUpAndDown.push(averageRoundedDown);

  return averageRoundedUpAndDown;
}

console.log(word_length('Cow cow cow love patty'));

module.exports = word_length;