

const everyDayStake = 100;
const bet = 1;
const numberOfMaxBets = 70;


let stake = 100;

//finding win or lose

function winOrLose() {

    const isLost = 0;
    let winOrLostCheck = Math.floor(Math.random() * 10) % 2;

    if (winOrLostCheck == isLost) {
        stake = stake - bet;
        console.log("Lost the Bet,final stake : " + stake);
    } else {
        stake = stake + bet;
        console.log("Won the Bet,final stake :  " + stake);
    }
}

function winOrLoseForDay() {

    for (let i = 0; i < 100; i++) {
        winOrLose();
    }
    console.log(stake);
}

winOrLoseForDay();


function winOrLoseForMonth() {

    let totalStake = 0;
    let stakeAfterBetting = 0;
    let winCount = 0;
    let loseCount = 0;
    do {

        for (let day = 1; day <= 20; day++) {
            stake = winOrLoseForDay();
            if (stake < everyDayStake)
                loseCount++;
            else
                winCount++;
            totalStake = totalStake + everyDayStake;
            stake = everyDayStake;
        }
        if (totalStake > stakeAfterBetting)
            console.log("lost for the month: " + (totalStake - stakeAfterBetting));
        else
            console.log("won for the month" + (stakeAfterBetting - totalStake));
    } while (stakeAfterBetting >= totalStake);
}
