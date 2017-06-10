//takes a number as a parameter (n)
//and returns the sum of numbers from 1 to n

function sum_numbers(number) {

  var sumNumbers = 0;

  for (i=0; i<=number; i++) {
    sumNumbers += i;
  }
  return sumNumbers;
}

console.log(sum_numbers(3));

module.exports = sum_numbers;
