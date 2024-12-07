// //                      Data types divide into two part

// //                                 Data type
// //
// //                 ___________________|___________________
// //                 |                                      |
// //              Primitve type                       non-primitve type
// //                |                                       |
// //            String,boolean                            Object(object ,array ,function)
// //            symbol,BigInt
// //            Nummber,Undefined
// //             null.

// //What is between  primitve type and none primitive???.
// //Primitve type

// //-Baisc data types.

// //-immutable(immutable means one is created never be change) data types.
// var str = "Hello";
// str ="world";//you can change str value direclty
// console.log(str);
// //-directly store in the memoery.

// //non-primitve-type/reference type

// //-mutable(means u can change after one created)data types.
// //example
// var arr = [1,2,3];
// arr.push(4);//change original arr
// console.log(arr);

// //-direclty no store in momory.

// //primitve types
// //Number:-
// //-Represent both integer and floating point numbera.They are both of types 'number'.

// //example
// var x= 2;
// var y =9.001;
// var z = -78;

// //String:-
// //All the textul all is string in js ,string can be in enclosed with single quotes(''),double quotes("") and backticks(``).

// var s = 'Hello!';//single quotes
// var s = "Hello!";//double quotes
// var s = `Hello!`//backtikcs

// //Boolean:-
// //Represent two type false and true.

// var isActive = true;
// var isPalindrome= false;

// //Symbol:-

// //syombol is a primitive data types introduced into ECMAScript2015(ES6).

// //symbol data type is unique value and immtuble data type in js

// //symbol is often use for object key to avoid name conllision.

// var id = Symbol("id");
// var preson = {
//     name:"john",
//     age:31,
//     [id] :'Johngamil@.com',
// }
// console.log(preson[id]);
// console.log(preson);

// for(let key in preson){
//     console.log(key);
// }

// var message = Symbol("Hello world!");
// console.log(message.description);
// console.log(message.toString());
// console.log(message);

// var a = Symbol("Hello!")
// var b = Symbol("Hello!")
// console.log(a===b);//false because each symbol is unique.

// //undefined:-
// //undefined represent the variable dose not have any value in current time.
// //do not worry! explain better way
// // let's understood with example:-

// var x;//when you declare a variable but not assing any value means that is undefined.
// console.log(x);//undefined

// //memeory

// //  -----------------
// // |                 |
// // | x : undefined   |
// // |                 |
// //  -----------------

// //when javascript see user dose not assinge any value so javascript automatically assing undefined(represent variable is declare but no assing any value) and undefined is default value.

// //null:-
// //-null is a primitive data types.

// //It is assigment value that intentional represent absecne of any object  value.

// //null is special value in js that  intentionaly indaicting variable should hold an object at moment ,it dose not.means simple represent "nothing" and "no object".

// //BigInt:-

// //-all the integer greater then 2**52-1  handle in bigInt type.

// //How to create
// var bigInt = 12n;
// var bigInt = BigInt("12");
// console.log(bigInt);

// console.log(7n/7n);//1n
// console.log(7n+7n);//14n
// console.log(7n-7n);//0n

// console.log(Math.min(2,3));
// console.log(13n/4n);//3
// console.log(5n/2n);//2

// //javascript dose not converte decimal value to bigInt
// // var decimalValue = 2.3n; //erroe!

// // console.log(Math.min(2n,3n));//Error!

// // console.log(typeof +2n);//Error!
