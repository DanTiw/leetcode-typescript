function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const b = stack.pop()!;
            const a = stack.pop()!;
            stack.push(performOperation(token, a, b));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
}

function isOperator(token: string): boolean {
    return token === "+" || token === "-" || token === "*" || token === "/";
}

function performOperation(operator: string, a: number, b: number): number {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return Math.trunc(a / b);
        default: throw new Error("Invalid operator");
    }
}

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
))