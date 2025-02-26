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
