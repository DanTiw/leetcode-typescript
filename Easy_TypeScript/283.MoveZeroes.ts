/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if(nums.length <= 1) return;

    let startPointer = 0, endPointer = 0;

    while(endPointer < nums.length) {
        if(nums[endPointer] === 0) {
           // console.log("is a 0", nums[endPointer]);
            endPointer++;
           // console.log("endPointer is now ", nums[endPointer]);
        }
        else {
            let temp = nums[endPointer];
            nums[endPointer] = nums[startPointer];
            nums[startPointer] = temp;
           // console.log("swapped", nums[endPointer], nums[startPointer]);
            endPointer++;
            startPointer++;
            //console.log("endPointer is now ", nums[endPointer]);
          //  console.log("startPointer is now ", nums[startPointer]);
           // console.log("nums is now ", nums);
        }
    }
};

moveZeroes([0,1,0,3,12])