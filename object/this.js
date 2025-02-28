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

