// takes a list of strings as a parameter and prints each entry in the list to the screen

function draw(string1, string2, string3, string4) {
  var arrayList = [];

  arrayList.push(string1);
  arrayList.push(string2);
  arrayList.push(string3);
  arrayList.push(string4);

  return arrayList;
}
console.log(draw('Peter', Pretty, Princess, Paul));
module.exports = draw;