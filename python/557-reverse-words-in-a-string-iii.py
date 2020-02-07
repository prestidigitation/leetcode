# Given a string, you need to reverse the order of characters in each word within a sentence while 
# still preserving whitespace and initial word order.

# Solution using Python string slicing, map, string split and join builtin methods.
# Time complexity: O(n), since entire string must be iterated through in order to split into array.
# Space complexity: O(n), since map returns an array of n reversed strings.
class Solution:
    def reverseWords(self, s: str) -> str:
        wordArray = s.split(' ')
        reversedWordArray = map(lambda x: x[::-1], wordArray)
        return ' '.join(list(reversedWordArray))