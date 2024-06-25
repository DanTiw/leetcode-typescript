function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [set1, set2] = [new Set<number>(nums1), new Set<number>(nums2)];

    return [
        Array.from(set1).filter(num => !set2.has(num)),
        Array.from(set2).filter(num => !set1.has(num)),
    ]
};