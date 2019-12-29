let startGame = confirm('Do you want to play a game?');
let totalPrize = 0;
let roundPrize = 0;
let roundRatio = 0;
let currentRound = 1;

while (currentRound > 0) {

    if (startGame === false) {
        alert('You did not become a billionaire, but can');
        currentRound = 0;
    } else {
        let randNum = Math.floor(Math.random() * (9 + 4*roundRatio));
        let possiblePrize = 100 * Math.pow(2, roundRatio);
        let attemts = 3;
        let attemtsCheck = false;

        for (let i = 0; i < 3; i++) {
            let userNum = prompt('Choose a roulete pocket number from 0 to ' + (8 + 4*roundRatio) + 
                                 '\nAttempts left: ' + (attemts - i) +
                                 '\nTotal prize: ' + totalPrize + 
                                 '\nPossible prize on current attempt: ' + possiblePrize);
                userNum = Math.floor(userNum);

            if (userNum === randNum) {
                roundPrize += possiblePrize;
                attemtsCheck = true;
            }
            possiblePrize = possiblePrize / 2;
        }
        totalPrize += roundPrize;
        roundPrize = 0;

        if (totalPrize > 0 && attemtsCheck === true) {
           let playAgain = confirm('Congratulation, you won! Your prize is: '+totalPrize+'. Do you want to continue?');

            if (playAgain === true) {
                currentRound++;
                roundRatio++;
            } else {
                alert("U didn't become a millionare but can!");
                currentRound = 0;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + totalPrize);
            let playAgain = confirm('Do you want to play again?');

            if (playAgain === true) {
                currentRound = 1;
                roundRatio = 0;
                totalPrize = 0;
            } else {
                alert("U didn't become a millionare but can!");
                currentRound = 0;
            }
        }
    }
}