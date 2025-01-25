function generateFibonacci(n) {
    if (n <= 0) {
        console.log("Please enter a positive integer.");
        return [];
    }

    const fibonacci = [];
    let a = 0,
        b = 1;

    for (let i = 1; i <= n; i++) {
        fibonacci.push(a);
        const next = a + b;
        a = b;
        b = next;
    }

    console.log(`Fibonacci sequence up to ${n} terms:`, fibonacci);
    return fibonacci;
}
const terms = 10;
generateFibonacci(terms);