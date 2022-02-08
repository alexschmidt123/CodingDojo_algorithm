//Lesson 1
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";  
// Conditional statement - starts with the "if" keyword
// Another way for us to contract the FLOW of ourcode
// The keyword is followed by a BOOLEAN statement. If the statement resolves to true, then we excute the conditional's CODE BLOCK.
if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";    
console.log(whatToBring);

//Lesson 2
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}
console.log("liftoff!");

//Lesson 3
var countPositives = 0;
var countNegatives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];   
// your code here! --start
for (var i=0; i<=numbers.length-1; i++){
    if (numbers[i] > 0){
        countPositives+=1;
    }
    else if (numbers[i]<0){
        countNegatives+=1;
    }
}
// your code here! --end
console.log("there are " + countPositives + " positive values");
console.log("there are " + countNegatives + " Negative values");
