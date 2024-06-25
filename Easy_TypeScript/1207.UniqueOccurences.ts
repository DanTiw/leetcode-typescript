const countOccurrences1 = (arr) => {
    const counter = new Map();
    arr.forEach((ele) => {
        counter.set(ele, counter.has(ele) ? counter.get(ele) + 1 : 1);
    });
    return counter;
};
function uniqueOccurrences(arr: number[]): boolean {
    const occurrences = countOccurrences1(arr);
    const uniqueOccurrences = new Set(occurrences.values());
    return occurrences.size === uniqueOccurrences.size;
};