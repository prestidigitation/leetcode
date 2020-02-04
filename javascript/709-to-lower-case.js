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
    let lowercaseStr = '';
    for (let i = 0; i < str.length; i++) {
        const alphabetIndex = upperChars.indexOf(str[i]);
        if (alphabetIndex !== -1) {
            lowercaseStr = `${lowercaseStr}${lowerChars[alphabetIndex]}`;
        } else {
            lowercaseStr = `${lowercaseStr}${str[i]}`;
        }
    }
  return lowercaseStr;
};

// Uses UTF-16 methods to implement toLowerCase()
// Time complexity: O(n)
// Space complexity: ?
var toLowerCase = function(str) {
  let lowercaseStr = '';
  for (let i = 0; i < str.length; i++) {
      const charCode = str[i].charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
          lowercaseStr = `${lowercaseStr}${String.fromCharCode(charCode + 32)}`
      } else {
          lowercaseStr = `${lowercaseStr}${str[i]}`
      }
  }
  return lowercaseStr;
};
