//can draw a 4x4 square using the * character. 
//Use the draw function you created above to 
//display the results of the function on the screen. 
//All subsequent functions that need to draw something 
//on the screen should use the draw function.
// Why do you think we need the draw function?

function square_stars(number) {
  var character = '*';
  var string = '';

  for (i=0; i<number; i++) {
    for (j=0; j<number; j++) {
      string += character;
    }
    string += '\n';
  }
return string;
}

console.log(square_stars(4));
module.exports = square_stars;