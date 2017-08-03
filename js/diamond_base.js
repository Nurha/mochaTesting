// Takes a character as a parameter, and can draw a diamond shape using it. 
// The base of the diamond should be 5.

function diamond_base(character) {
    var string = '';

    for (i=0; i<=5; i++) {
        for (j=0; j<=5-i; j++) {
            string += ' ';
        }
        for (k=1; k<=i; k++) {
            string += character + ' ';
        }
        string += '\n';
    }
    for (i=5-1; i>=1; i--) {
        for (j=0; j<=5-i; j++) {
            string += ' ';
        }
        for (k=1; k<=i; k++) {
            string += character + ' ';
        }
        string += '\n';
    }
    return string;
}
console.log(diamond_base('*'));
module.exports = diamond_base;