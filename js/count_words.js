//takes a sentence as a parameter
//and returns the number of words in the sentence

function count_words(string) {

  return string.split(' ').length;

}

console.log(count_words('True love is not finding the perfect person, learning to see an imperfect person perfectly'));

module.exports = count_words;
