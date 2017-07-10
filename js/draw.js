// takes a list of strings as a parameter 
//and prints each entry in the list to the screen

function draw(stringOne, stringTwo, stringThree, stringFour) {
  var arrayList = [];
  var string = ''; 

  arrayList.push(stringOne);
  arrayList.push(stringTwo);
  arrayList.push(stringThree);
  arrayList.push(stringFour);
  

  for (i=0; i<arrayList.length; i++) { 
    string += arrayList[i];
  }
  return string;
}
console.log(draw('*', '*', '*', '*'));
module.exports = draw;