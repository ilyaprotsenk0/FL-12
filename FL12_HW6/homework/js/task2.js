let a = prompt('Enter A side value'),
    b = prompt('Enter B side value'),
    c = prompt('Enter C side value');

if (a === '0' || b === '0' || c === '0') {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (isNaN(a) || a === '' || isNaN(b) || b === '' || isNaN(c) || c === '') {
    alert('Input values should be only numbers');
} else {
    a = Math.round(Number(a));
    b = Math.round(Number(b));
    c = Math.round(Number(c));

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c && c === a) {
            console.log('Equivalent triangle');
        } else if (a === b || b === c || c === a) {
            console.log('Isosceles triangle');
        } else if (a !== b && b !== c && c!== a) {
            console.log('Scalene triangle');
        }
    } else {
        console.log("Triangle doesn't exist");
    }
}