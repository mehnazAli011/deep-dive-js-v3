
//Undfined
//undefined vs undeclared vs uninitliaztion.

//undefined means definitly a variable but at a momnet but not have any value.

//undeclared means this value does not create in any scope.

//uninitliazation and TDZ (Tempreal dead zone) was introduced with E56,in simple trem you meaning you can not touch yet.




//NaN &&isNaN

//-NaN represent invalid and unrepresentable  number in javascript.

//-In some cases javascript return NaN.

//NaN is not eqaul itslef because NaN is unique value in js.
console.log(NaN===NaN);//false

//wheh you try convert non-numerical value to number type
var str = "Hello";
console.log(Number(str));//NaN means in valid operation in js

//when you do mathamathic operaor on non-numerical value.
var calculate = "a" *"b";
var calculate = "a" -"b";
console.log(calculate);//NaN

//when you do invalid mathamethic operation
var x = Infinity/-Infinity
console.log(x);//NaN
console.log(Math.sqrt(-1));//NaN
console.log(Math.sqrt(0/0));//NaN
console.log(undefined+null);
console.log(undefined*null);
console.log(undefined-null);

//NaN is definilty a number but invalid number.
console.log(typeof NaN);//"number"

//isNaN()

//-The isNaN() function is deremins given value NaN or not.But for the historical reason isNaN first try to converte value into number form then check is value is NaN then  return true otherwies false.


//Number.isNaN()
//Number.isNaN() function is strictly  check if value is NaN then return true otherwise retrun false.means definilty if  value is NaN so retrun true,otherwies always retrun false.


var myAge = Number("0o46");       // 38
var myNextAge = Number("39");     // 39
var myCatsAge = Number("n/a");    // NaN
myAge - "my son's age";           // NaN

myCatsAge === myCatsAge;          // false   

isNaN(myAge);                     // false
isNaN(myCatsAge);                 // true
isNaN("my son's age");            // true   

Number.isNaN(myCatsAge);          // true
Number.isNaN("my son's age");     // false

// Special Values: NaN



//do some pratice example
console.log(Number.isNaN('123'));
console.log(Number.isNaN(123));
console.log(Number.isNaN(`123`));
console.log(Number.isNaN('Hello'));
console.log(Number.isNaN(0/0));
console.log(Number.isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN('123'));
console.log(isNaN(123));




//answer!!!
//false
//false
//false
//false
//true
//false
//false
//true
//true
//false
//false
//false
//true
//true

