"use strict";

console.log("Hello from external JavaScript");

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to my Website!")

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
var colorPrompt = prompt("What is your favorite color?");
console.log(colorPrompt);
console.log(typeof colorPrompt);

alert("Great, " + colorPrompt + " is my favorite color, too!");

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

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

var itemsBought = parseInt(prompt("How many items are you purchasing? "));
var offer = confirm("If this offer is expired, press Cancel ; If not, press OK.");
var premiumMember = confirm("If you ARE a member, select OK ; Otherwise, select Cancel.")
var validOffer = (itemsBought > 2 && !premiumMember && offer)
var premiumMemberOffer = (premiumMember && offer);
if (validOffer || premiumMemberOffer) {
    alert("You got 20% off!");
}else {
        alert("This offer is invalid.")
    }





