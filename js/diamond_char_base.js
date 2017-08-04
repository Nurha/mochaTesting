// takes a character and a base size as parameters, 
// and can draw a diamond shape using them.

function diamondCharBase(character, base) {
    var string = '';

    for (i=0; i<=base; i++) {
        for (j=0; j<=base-i; j++) {
            string += ' ';
        }
        for (k=1; k<=i; k++) {
            string +=  ' ' + character;
        }
        string += '\n';
    }
    for (i=base-1; i>=1; i--) {
        for (j=0; j<=5-i; j++) {
            string += ' ';
        }
        for (k=1; k<=i; k++) {
            string +=  ' ' + character;
        }
        string += '\n';
    }
    return string;
}
console.log(diamondCharBase('*', 5))
module.exports = diamondCharBase; 