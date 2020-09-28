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


var hoursWorkedGoogle = prompt("How many hours do you work per week at Google?")
console.log(hoursWorkedGoogle)
console.log(typeof hoursWorkedGoogle)

var hoursWorkedAmazon = prompt("How many hours do you work per week at Amazon?")
console.log(hoursWorkedAmazon)
console.log(typeof hoursWorkedAmazon)

var hoursWorkedFacebook = prompt("How many hours do you work per week at Facebook?")
console.log(hoursWorkedFacebook)
console.log(typeof hoursWorkedFacebook)

var totalPay = ((parseInt(hoursWorkedGoogle) * 400) + (parseInt(hoursWorkedAmazon) * 380) + (parseInt(hoursWorkedFacebook)) * 350)

alert("Your total pay for this work period is " + totalPay)

var maxStudents = 30
var minHours = 40

var studentNumber = prompt("What is your student number?")
console.log(studentNumber)
console.log(typeof studentNumber)

var studentAvailable = prompt("How many hours are you available per week?")
console.log(studentAvailable)
console.log(typeof studentAvailable)

if (parseInt(studentNumber) <= maxStudents && parseInt(studentAvailable) >= minHours)
    alert("You have been enrolled into the course!")

if (parseInt(studentNumber) >= maxStudents && parseInt(studentAvailable) <= minHours)
    alert("You have NOT been enrolled into the course!")




