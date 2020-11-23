"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const filteredUsers = users.filter((x) => x.languages.length >= 3);
// const filteredUsers = users.filter(x => x.languages.length >= 3);
// This method works, but only because there is only one input being called in the function. If there were two, use uncommented version.
console.log(filteredUsers);

const emails = users.map((user) => user.email);
console.log(emails);

const totalYears = users.reduce((a, b) => a + b.yearsOfExperience, 0);
console.log(`total years of combined experience is ${totalYears}`);
console.log(`average length of experience is ${totalYears/users.length}`);

const longestEmail = users.reduce((currentEmail, user) => {
    if(currentEmail.length < user.email.length){
        currentEmail = user.email;
    }
    return currentEmail;
}, "");
console.log(longestEmail);


let startingString = "Your instructors are: ";
const instructors = users.reduce((a, b) => `${a} ${b.name},`, startingString);
console.log(instructors.substring(0, instructors.length -1) + ".");


const uniqueLang = users.reduce((arr, user) => {
    user.languages.forEach((lang) => {
        if(typeof arr[lang] === "undefined"){
            arr[lang] = "unique";
        }
    });
    return arr;
},{});
console.log(uniqueLang);