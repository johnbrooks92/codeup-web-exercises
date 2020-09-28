"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my Website!")

var colorPrompt = prompt("What is your favorite color?");
console.log(colorPrompt);
console.log(typeof colorPrompt);

alert("Great, " + colorPrompt + " is my favorite color, too!");


var mermaidDays = prompt("How many days did you rent The Little Mermaid for?");
console.log(mermaidDays);
console.log(typeof mermaidDays);

var bearDays = prompt("How many days did you rent Brother Bear for?");
console.log(bearDays);
console.log(typeof bearDays);

var herculesDays = prompt("How many days did you rent Hercules for?");
console.log(herculesDays);
console.log(typeof herculesDays);

var totalCost = ((parseInt(mermaidDays) + parseInt(bearDays) + parseInt(herculesDays)) * 3)

alert("Your total cost is " + totalCost)
