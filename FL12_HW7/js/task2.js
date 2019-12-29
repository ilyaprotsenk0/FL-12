let startGame = confirm('Do you want to play a game?');
let totalPrize = 0;
let roundPrize = 0;
let a = 0;
let gameRound = 1;

while (gameRound > 0) {

    if (startGame === false) {
        alert('You did not become a billionaire, but can');
        gameRound = 0;
    } else {
        let randNum = Math.floor(Math.random() * (9 + 4*a));
        let possiblePrize = 100 * Math.pow(2, a);
        let attemts = 3;
        let attemtsCheck = false;

        for (let i = 0; i < 3; i++) {
            let userNum = prompt('Choose a roulete pocket number from 0 to ' + (8 + 4*a) + 
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
                gameRound++;
                a++;
            } else {
                alert("U didn't become a millionare but can!");
                gameRound = 0;
            }
        } else {
            alert('Thank you for your participation. Your prize is: ' + totalPrize);
            let playAgain = confirm('Do you want to play again?');

            if (playAgain === true) {
                gameRound = 1;
                a = 0;
                totalPrize = 0;
            } else {
                alert("U didn't become a millionare but can!");
                gameRound = 0;
            }
        }
    }
}