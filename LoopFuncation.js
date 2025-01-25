function multiplicationTable1(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplicationTable1(8)




//nunmber Guessing game 

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 100:");
console.log(`(Debug) The correct number is: ${randomNumber}`);

function askQuestion() {
    rl.question("Enter your guess: ", (input) => {
        const userGuess = parseInt(input, 10);
        attempts++;

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number.");
        } else if (userGuess === randomNumber) {
            console.log(` Congratulations!You guessed it right in ${ attempts } attempts.`);
            rl.close();
            return;
        } else if (userGuess > randomNumber) {
            console.log("Too high! Try again.");
        } else if (userGuess < randomNumber) {
            console.log("Too low! Try again.");
        }

        askQuestion();
    });
}
askQuestion();

//  FizzBuzz  Problems

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//04


function calculateFactorial(number) {
    if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${number} is ${factorial}.`);


    if (factorial === 1) {
        console.log("The factorial is trivial.");
    } else if (factorial > 1000) {
        console.log("That's a large factorial!");
    } else {
        console.log("The factorial is within a moderate range.");
    }
}
const number = 5;
calculateFactorial(number)