// takes a character and a base size as parameters, 
// and can draw a square using them.

function square_param_base(character, baseSize) {
  var string = '';

  for (i=0; i<baseSize; i++) {
    for (j=0; j<baseSize; j++) {
      string += character
    };
    string += '\n';
  };
  return string;
};

console.log(square_param_base('*', 4));
module.exports = square_param_base;