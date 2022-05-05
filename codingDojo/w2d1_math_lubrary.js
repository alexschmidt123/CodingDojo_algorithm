// Math Library 
// Predict what each of the following will return

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );

// Getting a random number between 0 (inclusive) and 1 (exclusive)
var random = Math.random();
    
console.log(floor);  // --> 1
console.log(ceiling);  // --> 4
console.log(random);  // --> random number in the range of [0,1)




//Dice Roller
//Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random.

function d6() {
    var roll = Math.random();
    // your code starts
    roll = Math.floor(6*roll+1);
    // your code ends
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);




//Consult the Oracle
//Using the following array, write a function that will answer all of our questions by randomly choosing a response

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
var roll = Math.random(); //0 to 19, int
roll = Math.floor(20*roll);
console.log(lifesAnswers[roll]);






//1 to 6
//0 to 19 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is inclusive and the minimum is inclusive
}
