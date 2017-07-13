// takes a sentence as a parameter 
// and returns the letter most words end with

function ends(string) {
  var splitString = string.split(' ');
  console.log(splitString)

}

console.log(ends('Hello world again, but it\'s the end of the day'));
module.exports = ends;
