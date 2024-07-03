// @ts-ignore TOo complicated
function singleNumber(nums: number[]): number {
    const hashMap = new Map<number, number>();

    nums.forEach((num) => {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    });
    for(let [key,value] of hashMap) {
        if (value === 1){
            console.log(key);
            return key;
        }


    }

};
//A better Solution :
//function singleNumber(nums: number[]): number {
//   return nums.reduce((acc, num) => acc ^ num , 0)
// };


singleNumber([1,2,1,2,4])