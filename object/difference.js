//         What is different between the arrow function and regular function?
//1=>

// Syntax and Return Behavior

// Arrow Function:

// Syntax: let sum = (a, b) => a + b;
// ​
// Explanation: Arrow functions provide a concise syntax. When the function consists of a single expression, the return statement is implicit; there's no need to use the return keyword. ​

// Regular Function:

// Syntax: ```javascript function sum(a, b) { return a + b; }

// Explanation: Traditional functions require the use of the function keyword and explicitly include the return statement to output a value.
//2=>

//Arrow Function

let arrowFunc = () => this;

//Arrow function do not have own this context.Insted they inherit this from the surrouding context.

//Regular Function
function regularFunc() {
  return this;
}

//Regular Function do have their own this.

//why the Arrow function  do not have onw this and regular function have own???

// > Because of the design, arrow function is designed lexically; it only depends on where the function is written, and regular function is designed dynamically; it only depends on where the function is called.

const obj = {
  name: "My Object",
  arrowFunc: () => {
    console.log(this.name); // here "this" refers window not obj
  },
};
obj.arrowFunc();
console.log(obj.arrowFunc());

//   const obj = {
//     name: "My Object",
//     regularFunc: function() {
//       console.log(this.name);  // 'this' refers to obj
//     }
//   };
//   obj.regularFunc();  // My Object

//3=>

// Arrow function
// Arrow function do not use as a constructed because arrow function do not have[[construct]]  internal method.

// Regular Function
// Regular funtion use as a constructer it's call with the new keyword.
// When used with new, they create an object and bind the this value to the newly created object.

//4=>
// Arrow Function
// Arrow function do not have argumnet object.
// const arrowFunc = () => {
//   console.log(arguments); // Will throw an error
// };

// Regular Function
// Regular function have arguments object which is an array-like object that contains all arguments passed to the function.

// function sum() {
//   console.log(arguments); // {0: 1, 1: 2, 2: 3, ...}
// }
// sum(1, 2, 3); // Logs arguments