for (let i = 2; i <= 20; i += 2) {
    if (i < 20) {
        process.stdout.write(i + ', ');
    } else {
        console.log(i);
    }
}