// Define variable rules:
// variable cannot be a reserved keyword
// should be meaningful
// cammpt start with a number (1name)
// cannot contain a space or hypen
// case sensitive
// stick to channel notation (let firstName)
// delcare variable 'const' if its doesn't need to be redefined otherwise use 'let'

let firstName = 'James';
let lastName = 'Chen'
console.log(firstName, lastName);

const interestRate = 0.3;
console.log(interestRate)

// object literal
let person = {
    name: 'James', age: 30
};
console.log(person);

// dot notation (default choice)
person.name = 'John';
console.log(person.name);

// bracket notation
person['name'] = 'Mary'
console.log(person.name)

// array is data structure to represent a list of items
let selectedColors = [];  // empty array
let colors = ['red', 'blue']; 
colors[2] = ['green']
console.log(colors.length);

