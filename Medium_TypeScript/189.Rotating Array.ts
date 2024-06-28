function rotate(nums: number[], k: number): void {
    const temp = nums.slice(nums.length - k);
    console.log(temp);
    for (let i=0 ; i<nums.length - k; i++){
        temp.push(nums[i]);
    }
    console.log(temp);
    for (let i=0; i<nums.length; i++) {
        nums[i] = temp[i];
    }
    console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6], 2);