// JavaScript Variables and Datatypes

// JS was invented in the 90's as a way to make websites interactive. In its earliest, days, JS was only able to run in the browser.

//Since node was invented, we are now able to run JS outside of the browser.
// All coding languages will have reserved keywords that perform actions

var myName = "Gaoming Lin";
/*
JS naming rules
Cannot have spaces
Cannot use reserved keywords
Cannot have hyphens
Cannot start with with a number

Suggested naming coinvention is camel case.
*/

// JavaScript Datatypes
// Primitive Datatypes

//Strings = strings of characters, delimited by quotation marks

var question = 'will he or won\' he';
// Escape character is a backwards slash.

//Nimbers - integers and decimal numbers
var timeOfDay = 928;
var percentage = .50;

// Booleans = true or false
var isOld = true;

// null and undefined
// Null is usually an intentional value, while undefined is usually unintentioned.

//Only necessary to use the var keyword wheninstantiating or creating a variable.

//lesson 1
var a = 25;
a = a - 13;
console.log(a / 2);
//console.log means print
a = "hello";
console.log(a + " hello");


//Four things to create a for loop
// 1. A named sentry to do our bidding
// 2. Where the sentry starts
// 3. Where or how the sentry ends
// 4. How teh sentry changes


//Lesson 2
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

//Lesson 3
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);

}

getTotal([1, 3, 5]);

