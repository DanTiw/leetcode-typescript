function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const sArr = s.split('');
    let left = 0;
    let right = sArr.length - 1;
    while (left < right) {
        if (!vowels.has(sArr[left])) {
            left++;
            continue;
        }
        if (!vowels.has(sArr[right])) {
            right--;
            continue;
        }
        [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
        left++;
        right--;
    }
    return sArr.join('');
};