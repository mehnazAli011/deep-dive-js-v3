// "this" refer the current context of code. it depend where and how it used.


// global context
console.log(this);


//in function


function myFunc() {
    console.log(this);
  }
  console.log(myFunc());
  
//'use strict'
// function myFunc() {
//     console.log(this);
//   }
//   console.log(myFunc());//ERROR!

//In object method
var person = {
  name: "john",
  age: 21,
  greet: function () {
    console.log("Hello," + this.name);
  },
};
console.log(person.greet());

//Inside of constructor function
function Person(name) {
  this.name = name;
}
var person = new Person("Bob");
console.log(person.name);



// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log("Hello, " + this.name);
//   }
// }

// const person2 = new Person("Charlie");
// person2.greet(); // Output: Hello, Charlie

//Arrow function
//Arrow function does not have own this .insted ,they inherit from surrounding enivoriment
var person = {
  name: "David",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

person.greet(); // Output: Hello, David



var person = {
  name: "David",
  greet: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

person.greet(); // Output: Hello, undeifned.