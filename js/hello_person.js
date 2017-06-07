// The function takes a username as a parameter and returns "Hello, USERNAME!".
//If the username is Morgan or Paul only return Hello!.

function hello_person(username) {
  if (username ) {
    return 'Hello ' + username.toUpperCase() + '!';
  }
  else if (username === 'MORGAN' || 'PAUL') {
    return 'HELLO!';
  }
}

console.log(hello_person('PAUL'));
console.log(hello_person('MORGAN'));
console.log(hello_person('ichigo'));

module.exports = hello_person;
