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


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
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

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

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

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

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

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

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





