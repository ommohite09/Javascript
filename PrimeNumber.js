function isPrime(number) {
    if (number <= 1) {
        console.log(`${number} is not a prime number.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(`${number} is not a prime number.`);
            return;
        }
    }

    console.log(`${number} is a prime number.`);
}

// Example usage
const number = 29; // Replace this with the number you want to check
isPrime(number);