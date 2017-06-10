//takes a number as a parameter (n)
//and returns a list of numbers from 1 to n

function number_list(number) {

  var numberList = [];

  for (i=0; i<=number; i++) {
    numberList.push(i);
  }

  return numberList;
}
console.log(number_list(10));

module.exports =  number_list;
