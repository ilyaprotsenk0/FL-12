function getMin() {
    let min = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (min > arguments[i+1]) {
            min = arguments[i+1];
        }
    }
    console.log(min);
}

getMin(3, 0, -3);