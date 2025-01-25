function isPalindrome(str) {

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const reversedStr = cleanStr.split("").reverse().join("");

    if (cleanStr === reversedStr) {
        console.log(`"${str}" is a palindrome.`);
    } else {
        console.log(`"${str}" is not a palindrome.`);
    }
}
const input = "A man, a plan, a canal: Panama";
isPalindrome(input);