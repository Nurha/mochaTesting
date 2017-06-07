function hello_uppercase(username) {
  if (username) {
      return 'Hello ' + username.toUpperCase() + '!';
  }
  else {
    return 'HELLO!';
  }

};
console.log(hello_uppercase());
console.log(hello_uppercase('ichigo'));

module.exports = hello_uppercase;
