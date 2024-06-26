function majorityElement(nums: number[]): number {
    let candidate:number = 0
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            console.log(candidate)
        }

        count += (num === candidate) ? 1 : -1
        console.log("Count :",count)
    }
    console.log(candidate)
    return candidate;
};
//https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
majorityElement([1,1,1,2,2,2,2])