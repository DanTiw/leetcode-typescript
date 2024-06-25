function check(nums: number[]): boolean {
    const copyNums = [...nums];
    copyNums.sort((a, b) => a - b);
    nums=nums.concat(nums)
    const comparingNums=nums.toString()
    const sortedNums=copyNums.toString()
    if(comparingNums.includes(sortedNums)){
       // console.log(comparingNums)
       // console.log(sortedNums)
        return true;
    }
    else {
       // console.log(comparingNums)
        return false;

    }

};
