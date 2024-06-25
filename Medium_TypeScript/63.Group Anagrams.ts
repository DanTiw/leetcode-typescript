function groupAnagrams(strs: string[]): string[][] {
    //Record for key:value pairs
    const anagrams : Record <string, string[]> = {};
    for (const str of strs) {
        //Split strings and sort them to get the same key for anagrams
        const sortedStr = str.split('').sort().join('');
        //If the key doesn't exist, create a new key with an empty array
        anagrams[sortedStr] = anagrams[sortedStr] ?? [];
        //Push the string to the array of anagrams
        anagrams[sortedStr].push(str);
    }
    //Return the values of the map
    return Object.values(anagrams);
}