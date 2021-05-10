"use strict";

// console.log("hello from conditionals lec.js!");
// if (true) {
//     let x = 5;
// }
// console.log(typeof x);
// function sayHello(name) {
//     return 'Hello, ' + name + '!';
// }
// const sayHello2 = (name) => { 'Hello, ' + name + '!' }
// const sayHello3 = name => { 'Hello, ' + name + '!' }
// const sayHello4 = (name) => `Hello, ${name}!`
// console.log(sayHello);
// console.log(sayHello2);
// console.log(sayHello3);
// console.log(sayHello4);


// if (true) {
//     let x = 5;
// }
// console.log(typeof x);
function win(){
    let numbers = [1, 2, 3, 4, 5];
    numbers.map(n => n * 3)
    console.log(numbers);
}

console.log(win(numbers));
//
// const isDivisibleBy3 = n => n % 3 === 0;
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// console.log(numbers.filter(isDivisibleBy3));
// console.log(numbers);
// // ================ REAL WORLD SCENARIO ================
// // If a user is an admin,show a specific navbar
// // If weather is rainy, show rain icon
// // If number of lives is 0, game is over
//
//
// // ================ IF STATEMENT SYNTAX ================
//
// // if(condition){
// // code here runs if condition evaluates to true
// // }
//
//
// // ================ IF STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin
// // if(isAdmin){
// //     //show an admin navbar
// // }
//
//
//
//
//
//
//
// //TODO Together: Send a 20% off coupon if its users birthday
// //
// // if(isBirthday){
// //     //send a coupon
// // }
//
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
//
//
// var isRainy = true;
// if(isRainy){
//     alert("It is rainy.");
// }
//
// //TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
//
// var itemCost = 100;
// var currentBalance = 50;
//
// if(itemCost>currentBalance) {
//     alert("Sorry, you don't have sufficient funds.");
// } else {
//     alert("You can make this purchase with current funds.");
// }
//
//
//
//
// // Essentially saying 100>50 ==> True
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//
// var numberOfLives = 5
// if(numberOfLives === 0) {
//     alert("Sorry, game over!")
// } else {
//     alert("Game on, fam!");
// }
//
//
// //
// // //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// //
// // var weather = "snowing";
// // if(weather=== "snowing"){
// //     alert("It's Snowing!");
// // }
// //
// //
// //
// // //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
// // var numberInput = 5
// // if(numberInput > 10);{
// //     alert("True. Number is greater than 10.")
// // }
// //
// //
// // //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
// //
// //
// //
// //
// // // =============== IF / ELSE SYNTAX ================
// //
// // // if(condition){
// // //     // code here runs if condition evaluates to true
// // // } else {
// // //     // code here runs if condition evaluates to false
// // // }
// //
//
//
// // =============== IF / ELSE STATEMENT EXAMPLES ================
// //TODO Together: Show a specific navbar if user is admin, else show a different navbar
//
// var isAdmin = false;
//
//     if(isAdmin){
//         //show the admin navbar
//         console.log("is admin")
//     } else {
//         //show regular navbar
//         console.log("regular user")
//     }
//
// //TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
//
// var isRainy = true;
//
// if(isRainy){
//     alert("It's raining!")
// } else {
//     alert("Have a nice day!")
// }
//
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 5;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over!")
// } else {
//     alert("Next Level!")
// }
//
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
//
// var weather = "snowing";
//
// if(weather === "snowing"){
//     alert("It's snowing!")
// } else {
//     alert("Check back later for more details!")
// }
//
//
//
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
//
// var numberInput = 75
//
// if (numberInput > 10) {
//     alert("The number is greater than 10.")
// } else {
//     alert ("The number is less than 10.")
// }
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
//
// // function checkIfGameIsOver(numberOfLives) {
// //     if(numberOfLives ===0) {
// //         return "Sorry game over!";
// //     } else {
// //         return "Next level!"
// //     }
// // }
// //
// //
// //
// // //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// //
// //
// //
// // // SHOULD WE DELETE STUFF EXAMPLE
// // var weShouldDeleteStuff = confirm("Are you sure you want to delete everything?")
// //
// // // ok selection ==> true, cancel selection ==> false
// //
// // if(weShouldDeleteStuff){
// //     // delete everything
// //     // double check
// //     alert("We are deleting everything...");
// // } else {
// //     alert("Operation cancelled.")
// // }
// //
// //
// // //
// // // //TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
// // //
// // // // ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// // // // if(condition1){
// // // //     // code here runs if condition evaluates to true
// // // // }else if (condition2){
// // // //     // code here runs if condition1 is false *and* condition2 evaluates to true
// // // // }else {
// // // //     // code here gets executed if condition1 nor condition2 evaluate to true
// // // // }
// // //
// // // var areYouOfAge = confirm("Are you at least 13 years of age or older?")
// // //
// // // if(areYouOfAge){
// // //     alert("You may proceed!");
// // // } else {
// // //     alert("Sorry, you are not able to proceed.")
// // // }
// //
// //
// // // =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
// // //TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// //
// // var weather = "earthquake"
// //
// // if(weather === "snowing"){
// //     alert("It's snowing!")
// // } else if (weather === "raining"){
// //     alert("It's raining!")
// // } else {
// //     alert("Have a nice day!")
// // }
// //
// //
// //
// // //TODO Together: refactor the above statement as a function
// //
// // // function checkWeather(weather){
// // //     if (weather === "snowing"){
// // //         return("It's snowing!")
// // //     } else if (weather === "raining"){
// // //         return("It's raining!")
// // //     } else {
// // //         return("Have a nice day!")
// // //     }
// // // }
// // //
// // // console.log(checkWeather("raining"));
// // // console.log(checkWeather("tornado"));
// // // console.log(checkWeather("enflamed"));
// //
// // // Together: PIZZA PREFERENCE EXAMPLE
// //
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// // console.log("User pizza input: " + pizzaPreference);
// //
// // if (pizzaPreference === "pineapple and hot sauce") {
// //     alert("What a coincidence, that's my favorite!");
// // } else if (pizzaPreference === "cheese") {
// //     alert("Just plain cheese? Okay...");
// // }  else if (pizzaPreference === "ham"){
// //     alert("Ham is easy to spell and awesome!");
// // } else {
// //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // }
// //
// //
//
//
// //TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
//
// var lightColor = "Green"
//
// function checkLightColor(lightColor){
//     if (lightColor === "Green"){
//         return("Keep it moving, partner!")
//     } else if (lightColor === "Yellow"){
//         return("Whoa there, boss! Be cautious.")
//     } else if (lightColor === "Red"){
//         return("Hit the brakes, fool!")
//     } else {
//         return("Get yourself checked out, this is not a street light color.")
//     }
// }
//
// console.log(checkLightColor(lightColor));
// console.log(checkLightColor("Yellow"));
// console.log(checkLightColor("Red"));
// console.log(checkLightColor("Brown"));
//
// //
//
// // ================ NESTED STATEMENTS ===============
// //TODO Together:
// // If user is under 15, they are not eligible for a learners permit, else they are.
// // If they are eligible, check age.
// // If they are 15 they are eligible for a learners permit,
// // if they are 16 or older and have a permit, they are eligible for license,
// // if they are 16 or older and do not have a permit, they are not eligible for a license.
//
// var userAge = 16;
// var hasPermit = true;
//  // 16 && has permit === true ===> eligible for license
//
// if(userAge < 15){
//     alert("Sorry, you are not of eligible age.")
// } else {
//
//     if (userAge === 15){
//         alert("You are eligible for a permit!")
//     } else if (userAge >= 16 && hasPermit === true){
//         alert("You are eligible for a license!")
//     } else if (userAge >= 16 && hasPermit === false){
//         alert("You are not eligible for a license as you have not obtained a permit.")
//     } else {
//         alert("Critical Internal Error. Call the DMV for further info.")
//     }
// }
//
//
//
//
//
//
// // ================ TERNARY STATEMENT ================
//
// //TODO Together: Regular way
// //
// // var message;
// // var success = true;
// //
// // if (success) {
// //     message = "Operation was successful.";
// // } else {
// //     message = "Oops, something went wrong.";
// // }
// // console.log(message);
// //
// //
// // var success = true;
// // var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// // console.log(message)
// //
// //
// // //TODO: Refactor the following conditional as a ternary
// //
// // // var weather = "sunny";
// // // var weatherMessage;
// //
// // // if(weather === "rainy"){
// // //    weatherMessage = "It's raining!";
// // // } else {
// // //     weatherMessage = "Have a nice day!";
// // // }
// //
// // //WRITE YOUR TERNARY STATEMENT HERE!
// //
// // var weather = "Sunny"
// //
// // var weatherMessage = (weather) ? "It is raining!" : "This not the weather you are looking for. *uses Jedi Mind Trick*";
// // console.log(weatherMessage);
//
// // =============== SWITCH STATEMENT ================
// //TODO Together:
// //
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// //
// // switch(pizzaPreference) {
// //     case "pineapple and hot sauce":
// //         alert("What a coincidence, that's my favorite!");
// //         break;
// //     case "cheese":
// //         alert("Just plain cheese? Okay...");
// //         break;
// //     default:
// //         alert(pizzaPreference + " isn't my favorite, but let's order some!");
// //         break;
// // }
//
//
// //TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
//
// var weather = prompt("What is the weather like where you are today?");
//
// switch(weather) {
//     case "rainy":
//         alert("Careful out there on the roads!");
//         break;
//     case "sunny":
//         alert("Isnt that just the best when the sun is shining?");
//         break;
//     case "snow":
//         alert("Snow is only fun Day 1.");
//         break;
//     default:
//         alert(weather + " isn't my favorite, but at least we aren't on fire, right?");
//         break;
// }
//
// //TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

