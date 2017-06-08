//takes a list of numbers as a parameter
//and returns the highest and lowest numbers in the list

function high_low(numberOne, numberTwo, numberThree, numberFour) {

  var numberList = [];
  numberList.push(numberOne, numberTwo, numberThree, numberFour);

  var highestNumber = Math.max(...numberList);

  var lowestNumber = Math.min(...numberList);

  return highestNumber + ' ' + lowestNumber;
}

console.log(high_low(15, 1, 9, 4));

module.exports = high_low;
