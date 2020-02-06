// Given a string, you need to reverse the order of characters in each word within a sentence while 
// still preserving whitespace and initial word order.

/**
 * @param {string} s
 * @return {string}
 */

// Solution using JavaScript built-in methods to create new array of characters and reverse them.
// Time complexity: O(n), since traversing through the whole array is the dominant term.
// Space complexity: O(n) since you are using a new array of all n characters.
var reverseWords = function(s) {
  return s.split(' ').map(word => {
      return word.split('').reverse().join('');
  }).join(' ');
};

// More compact version of the above solution, but possibly less readible.
var reverseWordsOneLiner = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};
