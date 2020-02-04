/**
 * @param {string} str
 * @return {string}
 */

// Uses array of alphabet chars to implement toLowerCase()
// Time complexity: O(n)
// Space complexity: ?
var toLowerCase = function(str) {
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        const alphabetIndex = upperChars.indexOf(str[i]);
        if (alphabetIndex !== -1) {
            newString = `${newString}${lowerChars[alphabetIndex]}`;
        } else {
            newString = `${newString}${str[i]}`;
        }
    }
  return newString;
};