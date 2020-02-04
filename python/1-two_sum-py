class Solution:
    # Brute force solution that compares every item in nums against every other item.
    # Time complexity: O(n**2)
    # Space complexity: O(1)
    def twoSumBruteForce(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(len(nums)):
                if nums[i] + nums[j] == target and i != j:
                    return [i, j]
    
    # Solution that iterates through nums array twice.
    # Time complexity: O(n)
    # Space complexity: O(n), since all values of n are stored in a hash.
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(nums)):
            hash[nums[i]] = i
        
        for i in range(len(nums)):
            complement = target - nums[i]
            if hash.get(complement) != None and i != hash.get(complement):
                return [i, hash.get(complement)]

    # One-pass solution that optimizes for time complexity.
    # Time complexity: O(n)
    # Space complexity: O(n)
    def twoSumOptimal(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if hash.get(complement) != None:
                return [hash.get(complement), i]
            hash[nums[i]] = i
