function intersect(nums1: number[], nums2: number[]): number[] {
    const hashMap = new Map<number, number>();
    const result: number[] = [];
    nums1.forEach((num) => {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    });
    nums2.forEach((num) => {
        // @ts-ignore
        if (hashMap.has(num) && hashMap.get(num) > 0) {
            result.push(num);
            // @ts-ignore
            hashMap.set(num, hashMap.get(num) - 1);
        }
            console.log(hashMap);
            console.log(result);
    });
    return result;
};

intersect([1,2,2,1], [2,2])