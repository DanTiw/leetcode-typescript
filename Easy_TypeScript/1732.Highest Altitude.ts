function largestAltitude(gain: number[]): number {
    let sum :number[]= [];
    sum.push(0);
    for (let i = 0; i<gain.length; i++){
        sum.push(gain[i]+sum[i])
    }
    return Math.max(...sum);
};
