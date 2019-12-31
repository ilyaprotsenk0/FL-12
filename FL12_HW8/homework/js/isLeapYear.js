function isLeapYear (dateInput) {
    let dateObj;

    if (typeof(dateInput) === 'string') {
        let millis = Date.parse(dateInput);
        dateObj = new Date(millis);
    } else if (typeof(dateInput) === 'number') {
        dateObj = new Date(dateInput);
    }

    let year = dateObj.getFullYear();

    if (!isNaN(year)) {
        if (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
            console.log(year + " is not a leap year");
        } else {
            console.log(year + " is a leap year");
        }  
    } else {
        console.log("Invalid Date");
    }
}

isLeapYear(1213131313);