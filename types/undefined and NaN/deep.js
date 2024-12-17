
//Undfined
//undefined vs undeclared vs uninitliaztion.

//undefined means definitly a variable but at a momnet but not have any value.

//undeclared measn this value does not create in any scope.

//uninitliazation and TDZ (Tempreal dead zone) was introduced with E56,in simple trem you meaning you can not touch yet.




//NaN &&isNaN

//-NaN represent invalid number in javascript.

//-In some cases javascript return NaN.

//NaN is not eqaul itslef because NaN is unique value in js.
console.log(NaN===NaN);//false

//wheh you try converted non-numerical value to number type
var str = "Hello";
console.log(Number(str));//NaN means in valid operation in js