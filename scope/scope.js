
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
// EXAMPLE:-
// {
//   //block scope
//   let z = 3;
//   console.log(z);
// }
// // console.log(z);ERROR!

//lexical scope:-
//lexical scope means you can access variable from it own scope and present function scope where it was defined.

//example

function func1() {

  function func2() {
let message = "Hello!";
console.log(message);

  }
  return func2;
}
var myOutput  =func1();
console.log(myOutput());


//Hoisting
//In Js Hositing is a defalut behavior  they take all the function and variable decalertion and put top in their scope,

// var c ;
// c=3;
// console.log(c);//3


// c=3;
// var c ;
// console.log(c);//3

console.log(c); //undefined because only declaration hoisited not assigment.
c = 3;
var c;

//Let and const Hoisited in TDZ.

// let e ;
// e=4;
// console.log(e);

// console.log(e);//ERROR!
// let e ;
// e=4;


//const same behvior in hoisitg.

//What is TDZ (Temprol dead zone)
//Temprol dead zone refer to the period between the entering of the  scope and the point where variable is inlization.

// console.log(d);

// //
// //This area is
// //
// //TDZ
// //
// //
// //
// //
// //
// const d = 7;
//closure
//In js closure is function that access variable from it lexical envoirment(phyically where is present) ,in other word closure is function that access variable from outer scope when outer function is finish your exection context.

//closure is "remembers" variable from it lexical envoriment not whole execution context.
