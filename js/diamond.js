// can draw a diamond shape using *. 
// The center of the diamond should be 5 characters wide.

function diamond() {

  var string = '';

  for (i=0; i<=5; i++) {
    for (j=0; j<=5-i; j++) {
      string += ' ';
    }
    for (k=1; k<=i; k++) {
      string += '* '
    }
    string += '\n';
  }

  for (i=5-1; i>=1; i--) {
    for (j=0; j<=5-i; j++) {
      string += ' ';
    }
    for (k=1; k<=i; k++) {
      string += '* '
    }
    string += '\n';
  }

  return string;
}
console.log(diamond());
module.exports = diamond;


// function diamond(val){
//   var y, w, shape = '';

//   for(y = 0; y < val * 2 - 1; y++) {
//     w = y < val ? y : val * 2 - y - 2;
//     shape += Array(val - w).join(' ') + Array(w + 1).join('* ') + '*\n';
//   }
//   console.log( shape );
// }
// console.log(diamond(5));
// module.exports = diamond;