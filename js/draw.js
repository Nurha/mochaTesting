// takes a list of strings as a parameter and prints each entry in the list to the screen

function draw(stringOne, stringTwo, stringThree, stringFour) {
  var arrayList = [];

  arrayList.push(stringOne);
  arrayList.push(stringTwo);
  arrayList.push(stringThree);
  arrayList.push(stringFour);

  
  return arrayList;
}
console.log(draw('*', '*', '*', '*'));
module.exports = draw;