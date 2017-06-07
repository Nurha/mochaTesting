//takes a number as a parameter (n)
//and returns the sum of numbers from 1 to n

function sum_numbers(number) {

  var addedNumbers = 0;
  for (i=1; i<=number; i++) {
    addedNumbers += i;
  }
  return addedNumbers;
}

console.log(sum_numbers(3));
module.exports = sum_numbers;
