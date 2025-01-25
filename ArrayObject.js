let arr1 = [-3, -7, -57, -87, -25];
let largestNumber = -Infinity;
let secondLargest = -Infinity;

console.log(largestNumber, secondLargest, "Before");

for (let n of arr1) {
    if (n > largestNumber) {
        secondLargest = largestNumber;
        largestNumber = n;
    } else if (n > secondLargest && n != largestNumber) {
        secondLargest = n;
    }
}

console.log(largestNumber, secondLargest, "After");