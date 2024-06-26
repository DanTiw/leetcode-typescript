function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i];
            console.log("First Pointer is :",first)
        } else if (nums[i] <= second) {
            second = nums[i];
            console.log("Second Pointer is :",second)
        } else {
            return true;
        }
    }

    return false;
};

console.log(increasingTriplet([20,100,10,12,5,13]))