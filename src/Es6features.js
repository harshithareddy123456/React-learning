//arrow functions
// ES5
function add(a, b) {
  return a + b;
}

// ES6 (Arrow Function)
const add1 = (a, b) => a + b;

// ES5
var name = "harshitha";
var message = "Hello, " + name + "!";

// ES6 (Template Literal)
const message1 = `Hello, ${name}!`;

// ES6 (let)
let count = 0;

// ES6 (const)
const PI = 3.14;

// ES6 (Array Destructuring)
const [x, y] = [1, 2];

// ES6 (Object Destructuring)
const person = {
  name2: "har",
  age: 2,
};
const { name2, age } = person;

// ES6 (Default Parameters)
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}
//spread operator
//will spread array of elements into seperate elements or objects
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 3, 4];

//rest operator
//will form array will all the elements
function sum(...args) {
  console.log(args);
}
sum(23, 4);

// ES6 (Class)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
