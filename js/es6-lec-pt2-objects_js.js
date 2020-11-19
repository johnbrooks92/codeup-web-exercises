/* **************************************************************
*
*       Object Property Variable Assignment Shorthand
*
*****************************************************************/
//TODO TOGETHER: Create a newDog object using shorthand syntax

// let breed = "Pug";
// let age = 3;
// let dogName = "Lexie";
// let isCute = true;
//
// //old way
// let oldDog = {
// 	breed: breed,
// 	age: age,
// 	dogName: dogName,
// 	isCute: isCute
// }
//
// console.log(oldDog);
//





// //new way








/*****************************************************************
 *                       Object Destructuring
 *          Shorthand for creating variables from object properties
 *          Based on the name of the key
 *****************************************************************/

// var person = {
// 	name: 'codeup',
// 	age: 4
// };

// old way
//
// var name = person.name;
// var age = person.age;
//
//
// console.log(name); // 'codeup'
// console.log(age); // 4


//TODO TOGETHER: REFACTOR the above approach using ES6






/*==============================================*/


const pals = {
	dog: "Spike",
	cat: "Tom",
	mouse: "Jerry"
};

//old way
// let myDog = pals.dog;
// let myCat = pals.cat;
// let myMouse = pals.mouse;
//
//
// console.log(myDog); //Spike
// console.log(myCat); //Tom
// console.log(myMouse); //Jerry


//TODO TOGETHER: REFACTOR the above approach using ES6
//new way








/*==============================================*/

//TODO: Use object destructuring with the following object

const theFlash = {
	name: "Barry Allen",
	alias: "The Flash",
	occupation: "Forensic Scientist",
	powers: "Super Speed"
}








/*==============================================*/
//Destructuring with Arrays

let cats = ["CJ", "Claude", "Max"];

//oldway
// let cat1 = cats[0];
// let cat2 = cats[1];
// let cat3 = cats[2];


//new way
let [ cat1, cat2, cat3 ] = cats;

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);


/*==============================================*/

const alphabet = ['A', 'B', 'C', 'D', 'E'];

//old way
// const a = alphabet[0];
// const b = alphabet[1];
// const c = alphabet[2];


//TODO TOGETHER: new way





//TODO TOGETHER: To skip an element...





//TODO TOGETHER: To get all elements...Spread operator *BONUS





/*==============================================*/
// Using with functions


//old way
// function tellMeAbout(person) {
// 	var name = person.name;
// 	var age = person.age;
// 	console.log(name); // 'codeup'
// 	console.log(age); // 4
// }


//new way
function tellMeAbout({name, age}){
	console.log(name);
	console.log(age);
}

const person = {
	name: 'codeup',
	age: 4
};

tellMeAbout(person);


/*==============================================*/


function getArea({height, width}){
	return height * width;
}

let shape1 = {
	height: 10,
	width: 10
}

let shape2 = {
	height: 5,
	width: 5
}

console.log(getArea(shape1)); //100
console.log(getArea(shape2)); //25


//TODO: Refactor the getArea function from above using arrow syntax














