//LeetCode premium question


function encode(str: string[]): string {
    let result = '';
    for (let s of str) {
        //we add the length of the string then '$' then the string
        result = result + s.length + '$' + s;
        console.log(result);
    }
    return result;
}

function decode(str: string): string[] {
    let result = [];
    let i = 0;
    while (i < str.length){
        let j = i;
        while (str[j] !== '$'){
            j++;
        }
        //j stopped at the first '$'
        //we get the length of the string we encoded
        let len = Number(str.slice(i, j));
        //we push the string from the first letter then till the length of the string we encoded
        result.push(str.slice(j+1, j+1+len));
        console.log(result);
        //we move the pointer to the next string
        i = j+1+len;
    }

    return result;
}

encode(['abc', 'def', 'ghi']);
decode('3$abc3$def3$ghi')
