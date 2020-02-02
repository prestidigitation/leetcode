class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for i in range(len(nums)):
            hash[nums[i]] = i
        
        for i in range(len(nums)):
            complement = target - nums[i]
            if hash.get(complement) != None and i != hash.get(complement):
                return [i, hash.get(complement)]
