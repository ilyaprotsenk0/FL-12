function countNums(inputText) {
    let numStr = "";

    for (let i = 0; i < inputText.length; i++) {
        if (!isNaN(inputText[i]) && inputText[i] !== ' ') {
            numStr += inputText[i];
        }
    }

    let numList = {};

    for (let i = 0; i < numStr.length; i++) {
        if (numList[numStr[i]] === undefined) {
           numList[numStr[i]] = 1;
        } else {
           numList[numStr[i]]++;
        }
    }

    return numList;
}

console.log(countNums("I'm spent about 2340000 milliseconds to solve this task"));