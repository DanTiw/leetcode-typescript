function gcdOfStrings(str1: string, str2: string): string {
    let temp1=str1.length;
    let temp2=str2.length
    let gcd1=gcd(temp1,temp2)
    let str = str2.slice(0, gcd1);
    if (str1.includes(str)) {
    return str;
  }
    return "";
};



function gcd(a : number, b :number)  
{  
if (b == 0)  
    return a;  
return gcd(b, a % b);  
} ;