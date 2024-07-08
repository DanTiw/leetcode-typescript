function numWaterBottles(numBottles: number, numExchange: number): number {
    let result=numBottles;
    let emptyBottles=numBottles;
    while(emptyBottles>=numExchange){
        let fullBottles=Math.floor(emptyBottles/numExchange);
        result+=fullBottles;
        emptyBottles=fullBottles+emptyBottles%numExchange;
    }
    return result;
};
console.log(numWaterBottles(9,3));//13