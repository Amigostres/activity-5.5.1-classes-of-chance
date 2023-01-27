class Casino {
    // Write code here
    constructor(name, isFakeCoin, timesPlayed){   
        this.name = name;
        this.timesPlayed = 0
        this.isFakeCoin = isFakeCoin
    }

    playGame(num){
        let roll = Math.random();
        if(roll < 0.5 && this.isFakeCoin){
            console.log(`you won ${num}!`);
            console.log(`you've played ${this.timesPlayed++} games`)
        }else{
            console.log(`HackerU Casino wins!`);
            console.log(`you've played ${this.timesPlayed++} games`)
        }
    }

    rollDie(num){
        let roll = Math.random(1/6)
        console.log(`you rolled a ${Math.round(roll*10)}`)
    }

};

// TESTS
const myCasino = new Casino("HackerU Casino");
console.log(myCasino);
myCasino.playGame(5);
myCasino.playGame(15);
myCasino.playGame(25);
myCasino.playGame(35);

// BONUS TESTS
const myBonusCasino = new Casino("HackerU Bonus Casino", true);
console.log(myBonusCasino);
myBonusCasino.playGame(5);
myBonusCasino.playGame(15);
myBonusCasino.playGame(25);
myBonusCasino.playGame(35);


// Extra BONUS TESTS

const myExtraBonusCasino = new Casino("HackerU Extra Bonus Casino", false);
console.log(myExtraBonusCasino);
myExtraBonusCasino.rollDie(6);
myExtraBonusCasino.rollDie(20);
myExtraBonusCasino.rollDie(100);

