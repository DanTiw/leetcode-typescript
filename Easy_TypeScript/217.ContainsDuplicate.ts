function containsDuplicate(nums: number[]): boolean {
    // @ts-ignore
    const setNums = new Set(nums);
    return setNums.size !== nums.length;
};