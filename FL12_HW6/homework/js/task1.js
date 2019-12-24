let a = +prompt('Enter A:'),
    b = +prompt('Enter B:'),
    c = +prompt('Enter C:');

if (isNaN(a) || b === '0' || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    let d = b*b-4*a*c;
    if (d > 0) {
        let x1 = Math.round((-b+d)/(2*a));
        console.log('x1: ' + x1);
        let x2 = Math.round((-b-d)/(2*a));
        console.log('x2: ' + x2);
    } else if (d === '0') {
        let x = Math.round(-b/(2*a));
        console.log('x: ' + x);
    } else {
        console.log('No solution!');
    }
}