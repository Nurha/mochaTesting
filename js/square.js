// takes a character as a parameter and draws a 4x4 square using it. 
// Remember to use the draw function.

function square(character) {
  var string = '';

  for (i = 0; i<4; i++) {
    for (j=0; j<4; j++) {
      string += character;
    };
    string += '\n';
  };
  return string;
};

console.log(square('*'));
module.exports = square;