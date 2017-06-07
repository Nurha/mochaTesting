// takes a string parameter
//and returns it reversed

function reverseStr(string) {
  var splitString = string.split('');

  var reverseString = splitString.reverse();

  var rejoinedString = reverseString.join('');

  return rejoinedString;
};

console.log(reverseStr('Pingo chips is yummy'));

module.exports = reverseStr;
