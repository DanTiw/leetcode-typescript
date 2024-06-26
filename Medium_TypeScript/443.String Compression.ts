function compress(chars: string[]): number {
    const length = chars.length;
    if (length === 1) return 1;

    let count = 1;
    let res = "";

    for (let i = 0; i < length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            const countRes = count > 1 ? count : "";
            res += chars[i] + countRes;
            count = 1;
        }
    }

    for (let i = 0; i < length; i++) {
        chars[i] = res[i];
    }
    console.log(res)
    console.log(chars)
    return res.length;
};

compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])