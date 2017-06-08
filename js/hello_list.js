//takes a number as parameter and
//returns a list of "hello" entries equal to the number supplied

function hello_list(number) {
  var list = [];
  for (i=1; i<=number; i++) {
    var word = 'hello';
    list.push(word);
  }
  return list;
}

console.log(hello_list(2));

module.exports = hello_list;
