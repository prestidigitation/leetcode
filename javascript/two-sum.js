const twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hash.hasOwnProperty(complement) && hash[complement] !== i) {
            return [i, hash[complement]];
        }
    }
};

module.exports = twoSum;
