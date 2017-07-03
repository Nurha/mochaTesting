//takes a character as a parameter, and can draw a triangle with a base of 4 using it.

function triangle(character) {
  var shape = '';
  var base = 4;
  var count = 0;
  
  for (i=0; i<=base; i++) {
    for (j=0; j<count; j++) {
      shape += character;
    };
    count++;
    shape += '\n';
  };
  return shape;
};

console.log(triangle('*'));
module.exports = triangle;