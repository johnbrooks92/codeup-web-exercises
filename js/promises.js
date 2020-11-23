"use strict";
//with nested function

// function wait(numMilliseconds){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve();
//         }, numMilliseconds)
//     });
// }

//or in reduced form

function wait(numMilliseconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, numMilliseconds)
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



