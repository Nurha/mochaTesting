// takes a sentence as a parameter
// and returns the average word length rounded up
// sum up all the numbers and divide by the amount of numbers

function avg(string) {
  var splitString = string.split(' ');
  //console.log(splitString);
  var sumWords = 0;
  var numberOfWords = string.split(' ').length;
  //console.log(numberOfWords);
  
  for (i=0; i<splitString.length; i++) {
    //console.log(splitString[i].length);
    sumWords += splitString[i].length;
  }

  var average = sumWords / numberOfWords;
  var roundedUp = Math.ceil(average);

  return roundedUp;
}
console.log(avg('hello happy cow from space'));

module.exports = avg;