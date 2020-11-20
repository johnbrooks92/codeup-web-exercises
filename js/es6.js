/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  },
  {
    name: 'john',
    email: 'john@thisurlishighlysus.com',
    languages: ['html', 'css', 'javascript']
  }
];

// TODO: fill in your name and email and add some programming languages you know to the languages array.
//
// completed.
//
//
//
// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
//
// const name = 'your_name_here';
// const email = '';
// const languages = [];

// TODO: rewrite the object literal using object property shorthand
// users.push({
//   name,
//   email,
//   languages
// });
//
// console.log(users);

//This returns undefined!!!

// TODO: replace `var` with `let` in the following variable declarations
//Done
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });

//Refactored
users.forEach(user => emails.push(user.email));
console.log(emails);

// users.forEach(function(user) {
//   return names.push(user.name);
// });

//Refactored
users.forEach(user => names.push(user.name));
console.log(names);
// TODO: replace `var` with `let` in the following declaration
//Completed
let developers = [];
users.forEach(user => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const {name, email, languages} = user;

  // TODO: rewrite the assignment below to use template strings
  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  //Refactored
  developers.push(`{name}'s email is ${email}. ${name} knows ${languages.join
  (', ')}`)
});

// // TODO: Use `let` for the following variable
// let list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop
// developers.forEach(function (developer) {
//
//   // TODO: rewrite the assignment below to use template strings
//   list += '<li>' + developer + '</li>';
// });

for(let developer of developers){
  list +=`<li>${developer}</li>`
}
// list += '</ul>';

document.getElementById('main').innerHTML = list;