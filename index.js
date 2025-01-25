console.log("helloo world from console 1")
console.log('helloo world from console 2')
console.log(`helloo world from console 3`)



function checkLeapYear(year) {


    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }

}

checkLeapYear(year);





function NumberChecker(nuber) {

}