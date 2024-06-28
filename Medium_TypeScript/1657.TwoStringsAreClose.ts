//MY SOLUTION
//Time Complexity O(NlogN+MlogM)
/*

function closeStrings(word1: string, word2: string): boolean {
    let map1= new Map(); //<string,number>
    let map2 = new Map();
    for(let i=0; i<word1.length; i++){
        if(map1.has(word1[i])){
            map1.set(word1[i], map1.get(word1[i])+1);
        }else{
            map1.set(word1[i], 1);
        }
    }
    for(let i=0; i<word2.length; i++){
        if(map2.has(word2[i])){
            map2.set(word2[i], map2.get(word2[i])+1);
        }else{
            map2.set(word2[i], 1);
        }
    }
    let arr1 = Array.from(map1.keys()).sort();
    let arr1Values = Array.from(map1.values()).sort();

    let arr2 = Array.from(map2.keys()).sort();
    let arr2Values = Array.from(map2.values()).sort();

    if (arr1.toString() === arr2.toString() && arr1Values.toString()===arr2Values.toString()) {
        return true;
    }
    return false;
};

//Time COmplexirty O(N+M+Nlogn+Mlogm)
*/

//Optimal Solution with O(N) Time Complexity :

function closeStrings(word1: string, word2: string): boolean {
    const frequency1 = new Array(26).fill(0);
    const frequency2 =new Array(26).fill(0);

    for(let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let index=0; index<26; index++){
        if(frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if(frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    frequency1.sort((a, b) => a - b)
    frequency2.sort((a, b) => a - b)

    return frequency1.toString()===frequency2.toString()
};

