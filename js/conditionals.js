"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

var colorName="green"

function analyzeColor(colorName){
    if (colorName === "green"){
        return("That's my favorite color, too!")
    } else if (colorName === "yellow"){
        return("That one is okay.")
    } else if (colorName === "brown"){
        return("That sounds bland.")
    } else {
        return("You're wrong, that isn't a good color.")
    }
}

console.log(analyzeColor(colorName));
console.log(analyzeColor("yellow"));
console.log(analyzeColor("brown"));
console.log(analyzeColor("orange"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));



/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

switch(colorChoice){
    case "green":
        alert("That's my favorite color, too!")
        break;
    case "yellow":
        alert("That one is okay.")
        break;
    case "brown":
        alert("That sounds bland.")
        break;
    default:
        alert("You're wrong, that isn't a good color.")
        break;
}




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorChoice = prompt("What is your color?")
console.log(analyzeColor(colorChoice));
alert(analyzeColor(colorChoice));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalAmount){
    var discountRate = 0;
	switch(luckyNumber){
        case 0:
            discountRate = 0;
            break;
        case 1:
            discountRate = .1;
            break;
        case 2:
            discountRate = .25;
            break;
        case 3:
            discountRate = .35;
            break;
        case 4:
            discountRate = .50;
            break;
        case 5:
            discountRate = 1;
            break;
    }
	return totalAmount - (totalAmount * discountRate);
}





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
var totalBillPrompt = parseFloat(prompt("What was your total bill?"));
var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);
alert("Your lucky number was: " + luckyNumber + " Your total bill was: " + totalBillPrompt + " Your final discounted bill was " + finalAmount);
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var userConfirm = confirm("Would you like to enter a number?");

if(userConfirm){
	var userNumInput = prompt("Please enter a number.");
	console.log("user entered the following; " + userNumInput);
    var isNumber = !isNaN(userNumInput);
	if(isNumber){
        var userNumber = parseFloat(userNumInput);
        var isEven = userNumber % 2 === 0;
        console.log("The user's number is even: " + isEven);
        var evenMessage = (isEven) ? "Your number is even!" : "Your number is odd!";
         alert(evenMessage);
        alert(userNumber + 100);
        var posNegMessage = (userNumber >= 0) ? "Your number is positive" : "Your number is negative";
        alert( posNegMessage);
    } else {
        // sad path ==> not a number
        alert("Hey, that's not a number!");
    }
}
