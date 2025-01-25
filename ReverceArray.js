function reverseArray(arr1) {
    let reversedarr1 = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        reversedarr1.push(arr1[i]);
    }
    return reversedarr1;
}
let arr1 = [1, 2, 4, 5, 8];
let result = reverseArray(arr1);
console.log("Stock Array:", arr1);
console.log("Reversed Array:", result);