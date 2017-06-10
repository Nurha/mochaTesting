// takes a string parameter and
//returns the length of it

function length(string) {
  return string.split(' ').length;
}

console.log(length('I love you'));

module.exports = length;
