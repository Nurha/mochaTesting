//takes a list of numbers as a parameter
//and returns the highest and lowest numbers in the list

// function high_low(numberOne, numberTwo, numberThree, numberFour) {

//   var numberList = [];
//   numberList.push(numberOne, numberTwo, numberThree, numberFour);

//   var highestNumber = Math.max(...numberList);

//   var lowestNumber = Math.min(...numberList);

//   var highestNumberAndLowestNumber = [];

//   highestNumberAndLowestNumber.push(highestNumber);
//   highestNumberAndLowestNumber.push(lowestNumber);

//   return highestNumberAndLowestNumber;
// }

// console.log(high_low(15, 1, 9, 4));

// module.exports = high_low;

function high_low(numOne, numTwo, numThree, numFour) {
  var higestNumber = Math.max(numOne, numTwo, numThree, numFour);
  console.log(higestNumber);

  var lowestNumber = Math.min(numOne, numTwo, numThree, numFour);
  console.log(lowestNumber);

  var highLow = [];
  highLow.push(higestNumber);
  highLow.push(lowestNumber);

  return highLow;

}
console.log(high_low(1,9,5,7));
module.exports = high_low;
