# es6

1. ecmascript foundation - do an update every year
   es6 - 2015 update
   es7 - 2016
   es8 - 2017
---
2. Template Literals - usage

```javascript
const fullNametl = `${firstName} ${lastName}`
console.log(fullNametl);
// using Template Literals for multiline strings
let multilineString2 = `${firstName}
${lastName}
`;
```

---
3. Destructuring Objects - gives us the ability to write shorthand code as well as reassign values

```javascript
const {firstName, lastName} = authorProfile;
or
const {firstName: fn, lastName: ln} = authorProfile;
console.log(`${fn} ${ln}`);
document.getElementById('example').innerText = `${fn} ${ln}`;
```

---
4. Destructuring Arrays

```javascript
let popularAuthorsofNovels = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];

let [author1] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];

let [auth1, auth2] = ['Leo Tolstoy', 'Charles Dickens', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Jane Austen', 'J. K. Rowling', 'Mark Twain', 'George Orwell', 'Agatha Christie', 'J. R. R. Tolkien'];
auth2 = 'Dan Brown'
console.log(author1);
console.log(auth1 + ' ' + auth2);
```

---
5. Object Literal

```javascript
function displayCountryCapital(country, capitalOfCountry, region, province, capitalCityOfProvince) {
    const displayProvinceCapital = {province, capitalCityOfProvince};
    console.log(displayProvinceCapital);
    return displayProvinceCapital;
}

const d = displayCountryCapital('Canada', 'Ottawa', 'Atlantic Region', 'Newfoundland and Labrador', 'St. Johns');
document.getElementById('example').innerText = `Capital of \"${d.province}\" province is  \"${d.capitalCityOfProvince}\"`;
```

---
6. Object Literal Challenge

```javascript
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
```

---
7. For of Loop