"use strict";


/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number + 1);
// });

//
// console.log(newArray);

// TODO TOGETHER: Let's map through the array of numbers and add 1 to each element. Console log the new copy of the array.
// //Refactored
// let newArray = numbers.map(function(num){
//    return num + 1;
// });

////Refactored to one line
// let newArray = numbers.map(num => num + 1);
// console.log(newArray);
//TODO: Map through the new array of numbers and this time multiply each element by 3. Console log the new copy.

// let newArray = [];
// numbers.forEach(function(number){
//     newArray.push(number * 3);
// });
//
// console.log(newArray);

//Bonus: Refactor your functions using ES6

//Refactored
// let newArray = numbers.map(function(num){
//    return num * 3;
// });

//Refactored to one line
let newArray = numbers.map(num => num * 3);
console.log(newArray);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TODO TOGETHER: Let's filter through our binary and return all the true values. We'll store the new array in a variable named 'ones'

// const ones = binary.filter(function(x){
//     return x;
// });

// console.log(ones);


// TODO: filter through binary again and this time, return all the false values.
// const zeroes = binary.filter(function(x){
//     // return x === false;
//    return !x;
// //    retrun x === 0;
// });
// console.log(zeroes);

//Bonus: Refactor your functions using ES6

const ones = binary.filter(x => x);
console.log(ones);

const zeroes = binary.filter(x => !x);
console.log(zeroes);




const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TODO: filter through the array of objects and return all fruit type objects.

// const fruits = fruitsAndVeggies.filter(function(produce){
//    return produce.type === "fruit";
// });

//Reduced Further
const fruits = fruitsAndVeggies.filter (produce => produce.type === "fruit");

console.log(fruits);
// TODO: filter through the array of objects and return all vegetable type objects.

// const vegetables = fruitsAndVeggies.filter(function(produce){
//     return produce.type === "vegetable";
// });

//Reduced Further
const vegetables = fruitsAndVeggies.filter (produce => produce.type === "vegetable");

console.log(vegetables);


/*********************************************
 *              .reduce
 ******************************************** */

const numbersArray = [1, 2, 3, 4, 5];

// const sum = numbersArray.reduce(function(currentSum, currentNumber){
//     console.log(currentSum);
//     return currentSum + currentNumber;
// }, 0);
//
// console.log(sum);

//accumulation = 0
// add 1
//accumulation = 1
//add 2
//accumulation = 3
//add 3
//accumulation = 6
//add 4
//accumulation = 10
//add 5

// final accumulation = 15


// TODO TOGETHER: Let's reduce our original numbers Array into one single value.
// Done above.


// TODO: Using .reduce, subtract all numbers in the numbers Array from a starting point of 100.


const diff = numbersArray.reduce((currentDifference, currentNumber) => (currentDifference - currentNumber), 100);

// console.log(diff);



const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TODO: Using .reduce, return the total number of apples.
const totalApples = shoppingCarts.reduce(function(total, cart){
   return total + cart.apples;
},0);

console.log(totalApples);








const colors = ['red','orange','red','blue','blue','green','red'];

// TODO: Count the number of times a color appears in this Array. Hint: your initial value should be an empty object.
//Similar to a VAR Bucket in functionality of syntax
const colorCount = colors.reduce(function(colorCount, color){
    if(typeof colorCount[color] === "undefined"){
        colorCount[color] = 1;
    } else {
        colorCount[color] += 1;
    }

    return colorCount;
},{});
//Default data type of initial value is going to be same as data type of current elements being iterated over if not specified.
console.log(colorCount);








const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TODO TOGETHER: Using reduce, let's turn this into a string.

// Bonus: Create an Array of all the unique fur colors! Hint: check out the ES6 'Set' data type.

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];
