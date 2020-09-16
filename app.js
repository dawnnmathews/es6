/*
// Old way

let firstName = 'peter'
let lastName = 'smith'
let n1 = 120;
let n2 = 21;

const fullName = firstName + ' ' + lastName
// console.log(fullName)

// 1. Template Literals

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


// 2. Destructuring Objects
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

// 3. Destructuring Arrays

let popularAuthorsofNovels = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
let [author1] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
let [auth1, auth2] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
auth2 = 'Dan Brown'
console.log(author1);
console.log(auth1 + ' ' + auth2);



// 4. Object Literal

// Old Way
function displayCountryCapital(country, capitalOfCountry, region, province, capitalCityOfProvince) {
    const displayProvinceCapital = {newProvince: province, newProvinceCapital: capitalCityOfProvince};
    console.log(displayProvinceCapital);
    return displayProvinceCapital;
}

const d = displayCountryCapital('Canada', 'Ottawa', 'Central Canada', 'Ontario', 'Toronto');
document.getElementById('example').innerText = `${d.newProvince} ${d.newProvinceCapital}`;

// New Way

function displayCountryCapital(country, capitalOfCountry, region, province, capitalCityOfProvince) {
    const displayProvinceCapital = {province, capitalCityOfProvince};
    console.log(displayProvinceCapital);
    return displayProvinceCapital;
}

const d = displayCountryCapital('Canada', 'Ottawa', 'Atlantic Region', 'Newfoundland and Labrador', 'St. Johns');
document.getElementById('example').innerText = `Capital of \"${d.province}\" province is  \"${d.capitalCityOfProvince}\"`;

// 5. Object Literal Challenge
// Combining template literal, object literal and object destructuring

// Part 1
function returnFullProvinceInfo(provinceInfo) {
    const fullProvinceInfo = {
        region: provinceInfo.region,
        province: provinceInfo.province,
        capital: provinceInfo.capital,
        country: 'Canada',
        countryCapital: 'Ottawa'
    }
    return fullProvinceInfo;
}

const d = returnFullProvinceInfo({region: 'Atlantic Region', province: 'Newfoundland and Labrador', capital: 'St. Johns'});
console.log(d);
document.getElementById('example').innerText = `${d.region}, ${d.province}, ${d.capital}, ${d.country}, ${d.countryCapital}`;

function returnFullProvinceInfo(provinceInfo) {
    const {region, province, capital} = provinceInfo;
    const fullProvinceInfo = {
        region,
        province,
        capital,
        country: 'Canada',
        countryCapital: 'Ottawa'
    }
    return fullProvinceInfo;
}

const d = returnFullProvinceInfo({region: 'Atlantic Region', province: 'Newfoundland and Labrador', capital: 'St. Johns'});
console.log(d);
console.log(`${d.region}, ${d.province}, ${d.capital}, ${d.country}, ${d.countryCapital}`);
document.getElementById('example').innerText = `${d.region}, ${d.province}, ${d.capital}, ${d.country}, ${d.countryCapital}`;
*/
// 6. For of Loop
