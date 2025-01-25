function countVowelsAndConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

    console.log(`The string "${str}" has ${vowelCount} vowels and ${consonantCount} consonants.`);
}

const input = "JavaScript is awesome!";
countVowelsAndConsonants(input);