function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let maxCount = 0;

    // Count vowels in the first window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) count++;
    }
    maxCount = count;

    // Slide the window
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) count--; // Remove contribution of char leaving window
        if (vowels.has(s[i])) count++;     // Add contribution of char entering window
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}