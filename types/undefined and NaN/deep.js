
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