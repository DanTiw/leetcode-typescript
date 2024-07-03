function minDifference(nums: number[]): number {
    if (nums.length <= 4) return 0;
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let res = nums[n - 1] - nums[0];
    for (let i = 0; i < 4; i++) {
        res = Math.min(res, nums[n - 4 + i] - nums[i]);
    }
    return res;
};

console.log(minDifference([1, 5, 0, 10, 14])); // 1
console.log(minDifference([6, 6, 0, 1, 1, 4, 6])); // 2
console.log(minDifference([1, 5, 6, 14, 15])); // 1