//JavaScript Functions
//What is a Function?
//A function in JavaScript is a block of reusable code that performs a specific task. It helps avoid repetition and makes the code more organized.

//Declaring a Function
function greet() {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
}

greet(); // Output: Hello, World!
//Function with Parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice"); // Output: Hello, Alice!
//Function with Return Value
function add(a, b) {
  return a + b;
}
let sum = add(5, 10);
console.log(sum); // Output: 15
//Arrow Function (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12
// Function Expressions
const sayHello = function () {
  console.log("Hello!");
};
sayHello(); // Output: Hello!