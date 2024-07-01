const removeDuplicates = (nums: number[]): number => {
    let j:number = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[j - 2]) {
            nums[j++] = nums[i];
        }
    }

    return j;
};

/*
    const map=new Map;
   nums.forEach(num => {
       map.set(num,(map.get(num) || 0)+1);
   })
    console.log(map)
    return 0;
 */