// takes a sentence as a parameter 
// and returns the letter that occurs the most

function occurs_most(string) {
  string = string.replace(/\s+/g, '');
  var splitStr = string.split('');
  var firstChar = [];
  
  for (x=0; x<splitStr.length; x++) {
    firstChar.push((splitStr[x]).toLowerCase());
  };

  for (i=0; i<firstChar.length; i++) {
    for (y=0; y<firstChar.length; y++) {
      if (firstChar[i] === firstChar[y]) {
        count++;
        letterMap[firstChar[i]] = count;
      };
    };
    count = 0;
  }
  var max = 0, x;
  for (x in letterMap) {
    
  }  
};

console.log(occurs_most('this letter occurs the  most in this string'));
module.exports = occurs_most;


// function occurs_most(str) {
//     str = str.replace(/\s+/g, '');
//     var splitStr = str.split("");
//     var firstChar = [];
//     var letterMap = {};
//     var letter = "";
//     var count = 0;
//     var mostLetter = "";

//     for(var x = 0; x < splitStr.length; x++){
//      firstChar.push((splitStr[x]).toLowerCase());
//     }

//     for(var i = 0; i < firstChar.length; i++){
//         for (var y = 0; y < firstChar.length; y++){
//             if(firstChar[i] === firstChar[y]){
//               count++;
//               letterMap[firstChar[i]] = count;
//             }
//         }
//         count = 0;
//     }
//     var max = 0, x;
//     for( x in letterMap) {
//         if( letterMap[x] > max){
//             max = letterMap[x];
//             mostLetter = x;
//         }
//     }
//     return mostLetter;
// }

// console.log(occurs_most('this letter occurs the most in this string'));
// module.exports = occurs_most;
