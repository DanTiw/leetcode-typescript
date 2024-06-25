function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }
    const sLetters = countLetters(s);
    const tLetters = countLetters(t);
    for (const [char, count] of sLetters) {
        if (tLetters.get(char) !== count) {
            return false;
        }
    }
    return true;
};

function countLetters(str) {
    return str.split('').reduce((count, char) => {
        count.set(char, (count.get(char) || 0) + 1);
        return count;
    }, new Map());
}