function pivotIndex(nums: number[]): number {
    let sumLeft=0
    let totalSum=0;
    const n=nums.length;
    for (let i=0; i<n; i++) {
        totalSum+=nums[i]
    }
    for (let i=0; i<n; i++) {
        if (sumLeft*2 == totalSum-nums[i])
            return i;
        sumLeft += nums[i]

    }
    return -1;
};


console.log(pivotIndex([1,7,3,6,5,6]));
console.log(pivotIndex([1,2,3]));
console.log(pivotIndex([2,1,-1]));