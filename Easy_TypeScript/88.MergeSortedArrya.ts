/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let num1end = m - 1;
    let num2end = n - 1;
    let mergedEnd = m + n - 1;
    while (num1end >= 0 && num2end >= 0) {
        if (nums1[num1end] > nums2[num2end]) {
            nums1[mergedEnd] = nums1[num1end];
            num1end--;
        } else {
            nums1[mergedEnd] = nums2[num2end];
            num2end--;
        }
        mergedEnd--;
    }
    while (num2end >= 0) {
        nums1[mergedEnd] = nums2[num2end];
        num2end--;
        mergedEnd--;
    }
};