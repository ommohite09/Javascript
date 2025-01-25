function generateStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

// Example usage
const rows = 5; // Replace with the number of rows you want
generateStarPattern(rows);