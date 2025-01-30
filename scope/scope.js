
//scope is refer to the context in which a variable is accessible.

//In simple trem i can say scope is deretmine where you can access  variable and function in our code.

//scope are four type in js

//global scope:-
//variable declare outside of any function and block means it is in the global scope and this variable is accessible everywhere in  our code.

//example
var x = 2; //global scope
console.log(x); //x is accessible everywhere


//function scope:-
//variable declare and function declare inside of any function in js means that is fhunction scope that only accessible with that function,outside function is not accessible.



function myFunction() {
    //function scope
    let y = 2;
    console.log(y); //accessible
  }
  // console.log(y);//ERROR!
  
  console.log(myFunction());
  
  // console.log(y);//ERROR!
  //Block scope:-
//Block scope create with culry bases({}) if variable declare in block scope only accessiable inside of function.

//note:only let and const create block scope.

//-block scope introduced in ES6 with let and const.
EXAMPLE:-
{
  //block scope
  let z = 3;
  console.log(z);
}
// console.log(z);ERROR!
