"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
	if (isRaining) {
		var umbrella = "Get an umbrella"
	} else {
		var sunglasses = "Grab your glasses!"
		console.log(umbrella);
	}

}
//
// checkWeather(false); //undefined



function checkWeatherTwo(isRaining) {
	if (isRaining) {
		const umbrella = "Get an umbrella"
	} else {
		const sunglasses = "Grab your glasses!"
		console.log(umbrella);
	}

}

// checkWeatherTwo(false) //Uncaught ReferenceError: umbrella is not defined


/*==============================================*/


// let instructor = 'Vivian';
// instructor = 'Sophie';
// console.log(instructor); //Sophie




// const instructor = 'Vivian';
// console.log(instructor); // Vivian
// instructor = 'Sophie';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.



/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/

// {
//     var a = 10;
// }
// {
//     let b = 20;
// }
//
// const c = 30;
//
// console.log(a); // 10
// console.log(b); // Uncaught ReferenceError: b is not defined
// console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.





/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }

// if (false) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
// }

// console.log(x);




/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Vivian";
let lastName = "Canales";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

// console.log(greeting);

//TODO: Refactor code from above, using template strings.


let newgreeting = `Hell my name is ${firstName} ${lastName}.`
// console.log(newgreeting);


/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

// console.log(itemsHtml);



//new way
let newItemsHtml = `
	<ul>
		<li>${items[0]}</li>
		<li>${items[1]}</li>
		<li>${items[2]}</li>
	<ul>
	`;
//
// console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
	name: "Codeup",
	location: "Dallas and San Antonio",
	length: "20 weeks",
	technology: "HTML, CSS, JS, Java"
}

let programLetter = `Hello and thank you for your interest in ${program.name}!

Our program is located in ${program.location}. The program lasts ${program.length}.
`
//
// console.log(programLetter);


/*****************************
 *       For Of Loops
 *****************************/


const arr = ["one", "two", "three"];
for (let ele of arr) {
    console.log(ele);
}





/*==============================================*/
//TODO: Using for of loops, log each instructors name

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for (let ele of days) {
	console.log(ele);
}




/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Vivian", "Sophie", "Justin", "Casey", "David"]

for (let ele of instructors) {
	console.log(ele);
}



/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
	return `Hello ${name}`;
}


//remove curly braces (if only one statement you can remove the return keyword, too.)
let sayHelloC = (name) => name + 1;

//you can also remove parenthesis if ony 1 input
const sayHelloD = name => `Hello ${name}`;



console.log(sayHelloC("Vivian")); //Hello Vivian
console.log(sayHelloD("Justin")); //Hello Justin
console.log(sayHelloD("Sophie")); //Hello Sophie



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

function sum(a,b){
	return a + b;
}
//refactored to function expression
let sumA = function(a,b){
	return a + b;
}

//refactored to remove function keyword and add arrow syntax
let sumB = (a,b) => {
	return a + b;
}

//remove curly braces (if only one statement you can remove the return keyword, too.)
let sumC = (a,b) => a + b;




console.log(sum(5, 3)); //8
console.log(sumA(5, 3)); //8
console.log(sumB(5, 20)); //25
console.log(sumC(1, 9)); //10




/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax
//Function Declaration
function addOne(arg1) {
    return arg1 + 1;
}

//refactored to function expression
let addOneA = function(arg1){
	return arg1 + 1;
}

//refactored to remove function keyword and add arrow syntax
let addOneB = (arg1) => {
	return arg1 + 1;
}

//remove curly braces (if only one statement you can remove the return keyword, too.)
let addOneC = (arg1) => arg1 + 1;

//you can also remove parenthesis if ony 1 input
const addOneD = arg1 => arg1 + 1;





console.log(addOneA(2));
console.log(addOneB(2));
console.log(addOneC(2));
console.log(addOneD(2));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// // old way
// function sayHello(name) {
// 	if (typeof name === 'undefined') {
// 		name = 'World';
// 	}
// 	return 'Hello, ' + name + '!';
// }

// // refactored to ES6
// function sayHelloNow(name='World'){
// 	return `Hello ${name}`;
// }

// refactored to one line arrow function code
const sayHelloNow = (name = "World") => `Hello ${name}`;

console.log(sayHelloNow());; // "Hello, World!"
console.log(sayHelloNow('codeup'));; // "Hello, codeup!"



/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

function helloCohort(greeting, cohort){
	if(typeof greeting === "undefined"){
		greeting = "Good Morning";
	}
	if(typeof cohort === "undefined"){
		cohort = "Jupiter";
	}

	return greeting + " " + cohort;
}


