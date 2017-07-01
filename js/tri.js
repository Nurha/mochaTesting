// can draw a triangle with a base of 4 using *.

function tri() {

  var shape = '';
  var base = 4;
  var count = 0;

  for (i=0; i<=base; i++) {
     for (j=0; j<count; j++) {
       shape += ' *';
     }
     count++;
     shape += '\n';
  }
  return shape;
}

console.log(tri());
module.exports = tri;