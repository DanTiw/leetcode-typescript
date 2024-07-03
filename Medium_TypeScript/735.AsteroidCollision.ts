function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];
    for (let i= 0; i < asteroids.length; i++) {
        if (asteroids[i] > 0) {
            stack.push(asteroids[i]);
        }
        else if (asteroids[i] < 0) {
            if (stack.length === 0 || stack[stack.length - 1] < 0) {
                stack.push(asteroids[i]);
            }
            else if(stack[stack.length - 1] === Math.abs(asteroids[i])) {
                stack.pop();
            }
            else if (stack[stack.length - 1] < Math.abs(asteroids[i])) {
                stack.pop();
                i--;
            }
        }
    }
    return stack;
};

console.log(asteroidCollision([5, 10, -5])); // [5, 10]