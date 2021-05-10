"use strict";
let username = prompt("What is your user name?")
console.log(username);


fetch('https://api.github.com/users/' +username+ '/received_events/public', {headers: {'Authorization': githubSampleToken}})
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);









//with nested function

// function wait(numMilliseconds){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve();
//         }, numMilliseconds)
//     });
// }

//or in reduced form
//
// function wait(numMilliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, numMilliseconds)
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));



