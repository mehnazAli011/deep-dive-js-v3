//what is typeof operator???

//The typeof operator in js  used to  check  type of variable value.

//let's see 
var x = 2;
console.log(typeof x);//'number'


//How it is a work??

// ------------------
//|                  |
//| x:2 ->number     |
//| ----------------- 
//it is go into momory and check where is x store, find x locaition and which value hold x variable see it hold value is 2 that is integer ,means that is a number.

//Type of operator
//- The typeof operator always return result in string form.

//-It check which value type value store in variables.

//do practice with given example
var value;
console.log(typeof 42);//??
console.log(typeof "");//??
console.log(typeof 'hello');//??
console.log(typeof true);//??
console.log(typeof undefined);//??
console.log(typeof false);//??
console.log(typeof 0);//??
console.log(typeof {});//??
console.log(typeof []);//??
console.log(typeof -7);//??
console.log(typeof -7n);//??
console.log(typeof `-7n`);//??
console.log(typeof 2.3);//??
console.log(typeof `${2**2}`);//??
console.log(typeof BigInt('1'));//??
console.log(typeof Symbol("1"));//??
console.log(typeof value);//??
console.log(typeof null);//??
console.log(typeof typeof null);//??
console.log(typeof typeof {});//??
console.log(typeof typeof ``);//??
console.log(typeof typeof value);//??
console.log(typeof (()=>{}));//??
console.log(typeof new String(1));//??
console.log(typeof Math.min);//??
console.log(typeof class name {
    constructor(parameters) {
        
    }
});//??


// example solution->
//"number"
//"string"
//"string"
//"Boolean"
//"undefined"
//"Boolean"
//"number"
//"object"
//"object"
//"number"
//"bigInt"
//"number"
//"string"
//"BigInt"
//"symbol"
//"undefind"
//"object"
//"string"
//"string"
//"string"
//"string"
//"funtion"
//"object"
//"function"
//"function"


//How ??? typeof([]) is object , (typeof value) is undefined,(typeof `${2**2}`); is string,(typeof null) is object ,(typeof typeof ``);string, (typeof typeof value)  is string ,(typeof typeof {}) is string and (typeof typeof null) is string.


//let's  understand each one

typeof [] //  is "Object" because array is speical type of object.
//if want check is check array or not then u use Array.isArray built-in method.

typeof value// is "undefined"  because value is delcare but not assing any value means it undefined the type is represent value is undeifned.

typeof `${2**2}`// is string because it return 4  in string form.
console.log(`${2**2}`);//`4`
