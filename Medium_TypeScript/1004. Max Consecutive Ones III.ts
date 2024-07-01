function longestOnes(nums: number[], k: number): number {
    let maxCount = 0;  // Stores the maximum length of valid subarray seen so far
    let count = 0;     // Represents the current window size

    for (let i = 0; i < nums.length; i++) {
        // If we encounter a 0, we use one of our flips
        if (nums[i] === 0) k--;

        // If we've used more flips than allowed, shrink the window from the left
        while (k < 0) {
            // If the element leaving the window was a flipped 0, we get that flip back
            if (nums[i - count] === 0) k++;
            count--;  // Shrink the window
        }

        count++;  // Expand the window to include the current element

        // Update maxCount if the current window is larger
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
};