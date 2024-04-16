const iterationPrefix = 'Fibonacci using iteration: ';
const recursionPrefix = 'Fibonacci using recursion: ';
const ITERATION = fib(8);
const RECURSION = fibRec(8);

console.log(iterationPrefix, ITERATION);
console.log(recursionPrefix, RECURSION);

// Fibonacci using iteration
function fib(num) {
    let fibArray = [0, 1];

    for (let i = 2; i <= num; i++) {
        let newNum = fibArray[i - 2] + fibArray[i - 1];
        fibArray.push(newNum);
    }

    return fibArray;
}

// Fibonacci using recursion
function fibRec(num) {
    if (num < 2) {
        return [0, 1];
    }

    let fibArray = fibRec(num - 1);
    let newNum = fibArray[num - 2] + fibArray[num - 1];
    fibArray.push(newNum);

    return fibArray;
}