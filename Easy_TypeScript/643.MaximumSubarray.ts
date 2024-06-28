function findMaxAverage(nums: number[], k: number): number {
    let maxSum = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    maxSum = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};

console.log(findMaxAverage(
    [1, 12, -5, -6, 50, 3], 4
)); // 12.75
console.log(findMaxAverage(
    [5], 1
)); // 5
console.log(findMaxAverage(
    [0, 1, 1, 3, 3], 4
)); // 2
console.log(findMaxAverage(
    [0, 4, 0, 3, 2], 1
)); // 4
console.log(findMaxAverage(
    [1, 2, 3, 4, 5], 1
)); // 5
