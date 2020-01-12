function convert() {
    let reverseArr = [];
    
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            reverseArr[i] = String(arguments[i]);
        } else if (typeof arguments[i] === 'string') {
            reverseArr[i] = Number(arguments[i]);
        }
    }
    console.log(reverseArr);
}

convert('1', 2, 3, '4');

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

executeforEach([1, 2, 3], function(el) {
    console.log(el * 2);
});

function mapArray (arr) {
    let mapped = [];

    executeforEach(arr, function(el) {
        if (typeof el === 'string') {
            el = Number(el);
        }
        mapped.push(el + 3);
    });

    return mapped;
}

console.log(mapArray([2, '5', 8]));

function filterArray(arr) {
    let filtered = [];

    executeforEach(arr, function(el){
        if (el % 2 === 0) {
            filtered.push(el);
        }
    });

    return filtered;
}

console.log(filterArray([2, 5, 8, 9]));

function flipOver(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    console.log(reverseStr);
}

flipOver('hey world');

function makeListFromRange(a) {
    let list = [],
        begin = a[0],
        end = a[1];

    let listLenght = end - begin + 1;
        list[0] = begin;

    for (let i = 1; i < listLenght; i++) {
        list[i] = ++begin;
    }
    console.log(list);
}

makeListFromRange([2, 7]);

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
    ];

function getArrayOfKeys (obj, key) {
    let namesArr = [];

    executeforEach(obj, function(el) {
        namesArr.push(el[key]);
    });

    return namesArr;
}

console.log(getArrayOfKeys(actors, 'name'));

function substitute(a) {
    let arr = [];
    executeforEach(a, function (el) {
        el < 30 ? arr.push('*') : arr.push(el);
    });
    return arr;
}

console.log(substitute([58, 14, 48, 2, 31, 29]));

const date = new Date(2019, 0, 2);

function getPastDay(date, past) {
    date.setDate(date.getDate() - past);
    return date.getDate();
}

console.log(getPastDay(date, 2));

function formatDate(a) {
    let year = a.getFullYear(),
        month = a.getMonth(),
        day = a.getDate(),
        hour = a.getHours(),
        minute = a.getMinutes();

    hour < 10 ? hour = '0' + hour : '';
    console.log(year+'/'+month+'/'+day+' '+hour+':'+minute);
}

formatDate(new Date('6/15/2018 21:15:00'));