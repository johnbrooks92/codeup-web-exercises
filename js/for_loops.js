"use strict";

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for(var i = 1; i <= 10; i++){
        var product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}
//
(showMultiplicationTable(7));




// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.
//
//
for (var i = 0; i < 10; i++){
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even")
    }else{
        console.log(randomNumber + " is odd")
    }
}
//
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// console.log(randomNumber);
// //
// // // Create a for loop that uses console.log to create the output shown below.
// // //
// // //
// // // 1
// // // 22
// // // 333
// // // 4444
// // // 55555
// // // 666666
// // // 7777777
// // // 88888888
// // // 999999999
// //
// //
// for(var i = 1; i <= 1; i++); {
//     if (i === 1)
//         console.log();
//         console.log(1);
//         console.log(22);
//         console.log(333);
//         console.log(4444);
//         console.log(55555);
//         console.log(666666);
//         console.log(7777777);
//         console.log(88888888);
//         console.log(999999999);
// }

for(var outer = 1; outer <= 9; outer++){
    var output = '';

    for(var inner = 1; inner <= outer; inner++){
        output += outer;
    }
    console.log(output);
}
// //
// //
// // // Create a for loop that uses console.log to create the output shown below.
// // //
// // //
// // // 100
// // // 95
// // // 90
// // // 85
// // // 80
// // // 75
// // // 70
// // // 65
// // // 60
// // // 55
// // // 50
// // // 45
// // // 40
// // // 35
// // // 30
// // // 25
// // // 20
// // // 15
// // // 10
// // // 5
// //
for(var i = 105; i>=5, i--;){
    if (i % 5 === 0 && i !== 0)
        console.log(i);
}