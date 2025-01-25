function factorialUsingWhile(num) {
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let factorial = 1;
    let i = num;

    while (i > 0) {
        factorial *= i;
        i--;
    }

    console.log(`The factorial of ${num} is ${factorial}.`);
    return factorial;
}
const number = 5;
factorialUsingWhile(number);