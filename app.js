/*
// Old way

let firstName = 'peter'
let lastName = 'smith'
let n1 = 120;
let n2 = 21;

const fullName = firstName + ' ' + lastName
// console.log(fullName)

// Template Literals

const fullNametl = `${firstName} ${lastName}`
// console.log(fullNametl)

// with numbers
const t = `${ n1 + n2 } ${lastName}`
// console.log(t)

// multiline strings - old way
let multilineString1 = 'Hello \n' + 'world'
// console.log(multilineString1);
// document.getElementById('example').innerText = multilineString1;

// multiline strings - new way
let multilineString2 = `${firstName}
${lastName}
`;
console.log(multilineString2);
document.getElementById('example').innerText = multilineString2;
*/

// Destructuring Objects
const authorProfile = {
    firstName : 'Arthur',
    middleName : 'Ignatius Conan',
    lastName : 'Doyle',
    occupation : 'writer, physician',
    genre : 'detective fiction, fantasy, science fiction, historical novels, non-fiction',
    notableWorks : 'Stories of Sherlock Holmes, The Lost World',
    dateofBirth : '22 May 1859'
};

const {firstName, lastName} = authorProfile;
// console.log(`${firstName} ${lastName}`);
// document.getElementById('example').innerText = `${firstName} ${lastName}`;

// Reassigning Values
const {firstName: fn, lastName: ln} = authorProfile;
console.log(`${fn} ${ln}`);
document.getElementById('example').innerText = `${fn} ${ln}`;


