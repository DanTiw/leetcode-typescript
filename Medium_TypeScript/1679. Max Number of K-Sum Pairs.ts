//My Solution
//time complexity : 0(nlogn)

function maxOperations(nums: number[], k: number): number {
    let right=nums.length-1;
    let left=0;
    let count =0
    nums.sort((a,b)=>a-b);
    while(left<right){
        if(nums[left]+nums[right]===k){
            count++;
            left++;
            right--;
        }else if(nums[left]+nums[right]<k){
            left++;
        }else{
            right--;
        }
    }
    return count;
}
console.log(maxOperations([1,2,3,4],5))

//Optimal Solution O(n)
function maxOperation(nums: number[], k: number): number {
    let map2: Map<number, number> = new Map();
    let count: number = 0;

    for(let i = 0; i < nums.length; i++){
        let complement:number  = k - nums[i];


        if(map2.has(complement) && map2.get(complement) > 0){
            map2.set(complement, map2.get(complement) - 1)
            count++;
        } else {
            map2.set(nums[i], (map2.get(nums[i]) || 0) + 1)
        }
    }

    return count;
};