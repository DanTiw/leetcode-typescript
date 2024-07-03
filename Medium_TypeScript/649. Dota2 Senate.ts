function predictPartyVictory(senate: string): string {
    const q1 = [];
    const q2 = [];
    const n = senate.length;
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') q1.push(i);
        else q2.push(i);
    }
    while (q1.length > 0 && q2.length > 0){
     
        if (q1[0] < q2[0]) {
            q1.push(q1.unshift()+n)
            q2.shift();
        }
        else 
        {
            q2.push(q2.unshift()+n)
            q1.shift();
        }
    }
    return q1.length > q2.length ? "Radiant" : "Dire";

};

console.log(predictPartyVictory("RD")); // Radiant