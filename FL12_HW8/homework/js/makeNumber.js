function makeNumber(a) {
    let numbers = "";
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(a[i])) {
            numbers += a[i];
        }
    }
    console.log(numbers);
}

makeNumber("1ab9fgf88cc13qwe77");