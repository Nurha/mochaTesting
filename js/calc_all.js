// takes two numbers and a symobl as parameters, 
//and can add, subtract, multiply, or divide the numbers, based on the symbol.

function calc_all(numberOne, numberTwo, symbol) {
  if (symbol === '+') {
    return numberOne + numberTwo;
  } else if (symbol === '-') {
    return numberOne - numberTwo;
    } else if (symbol === '*') {
      return numberOne * numberTwo;
      } else if (symbol === '/') {
        return numberOne / numberTwo;
      };
};


console.log(calc_all(10, 2, '/'));

module.exports = calc_all;