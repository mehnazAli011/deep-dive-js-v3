

//1.Implicit coercion
//2.Explicit coercion

//Implicit coercion means when javascript engine actomatically converte one type to another that is implicit coercion.

//EXAMPLE
var x = 2;
var y = "3";
var z= x+y;
console.log(z);


//Explicit coercion mean when user converte one type to another data type 

//EXAMPLE

var x = 2;
var y = "3";
var z= x+Number(y);
console.log(z);

//Boxing

//When call method on primitive value js automaitcally convert into constructer object this procees is Boxing

var str = "Hello!";
console.log(str.length);//6


//Memory
var str = new Object("Hello!");
console.log(str.length);//6






//corner case
// Number("");                     
// Number("   \t\n");              //   0                    OOPS!
// Number(null);                   //   0                    OOPS!
// Number(undefined);              //   NaN
// Number([]);                     //   0                    OOPS!
// Number([1, 2, 3]);              //   NaN
// Number([null]);                 //   0                    OOPS!
// Number([undefined]);            //   0                    OOPS!
// Number({})                      //   NaN

// String(-0);                     //   "0"                  OOPS!
// String(null);                   //   "null"
// String(undefined);              //   "undefined"
// String([null]);                 //   ""                   OOPS!
// String([undefined]);            //   ""                   OOPS!

// Boolean(new Boolean(false));    //   true                 OOPS!


// Coercion: corner cases