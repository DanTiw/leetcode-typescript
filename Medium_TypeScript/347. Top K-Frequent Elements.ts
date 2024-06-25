function topKFrequent(nums: number[], k: number): number[] {
    const haspMap = new Map();
    nums.forEach((num) => {
        haspMap.set(num, (haspMap.get(num) || 0) + 1);
    });
    const sorted = Array.from(haspMap).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(([num]) => num);


};


