function reverseWords(s: string): string {
    const str1= s.replace(/\s+/g ,' ').split(' ').reverse().join(' ')

    console.log(str1)
    return str1
};

reverseWords("a good   example")