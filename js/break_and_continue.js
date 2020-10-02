"use strict";

// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.


for(var i = prompt("Please provide an odd number from 1-50!"); i < 50; i++) {
    if (i % 2 === 0)
        alert(prompt("Try Again!"));
    else if (i % 2 !==0)
        console.log(i);
        break;
}

// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

for (var x = 1; x < 50; x++) {
    if (x % 27 === 0)
        console.log("Number to skip is: " + x);
    else if (x % 2 !== 0)
        console.log("Here is an odd number: " + x);
    continue;
        console.log("test");
}

