//In Javascript we refer type converition as  a coercion

//type convertion means one data type to convert into another data type.

//toPrimitve
//toString
//toNumber
//toBoolean

//toPrimitve
//when some value is non-primitve means object, array and function it use for converte into primitve types.

//   "hint"
//if value is string
//valueof
//toString

//if value is number
//toString
//value of

//let's undertand with example
//explicit convertion
var obj = { name: "john" };
console.log(String(obj)); //"[object,Object]"

var obj = { age: 30 };
console.log(Number(obj)); //NaN
console.log(Boolean(obj)); //NaN

//implicit conversion
var arr = [1, 2, 3];
console.log(arr + " ");

//toString

//-The toString abtract operation take any value return in string form.

//example
console.log(String(NaN));//'NaN'
console.log(String(undefined));//'Undefined'
console.log(String(1));//'1'
console.log(String(0));//'0'
console.log(String(3.14));//'3.14'
console.log(String(-9.0));//'-9.0'
console.log(String(-0)); //"0" because in js -0 and 0 in string eqaul to  "0".string - sing not consider in string form. Techinlaly in js -0 and 0 are eqaul.

//toString(object)
console.log(String([]))//""
console.log(String([1, 2, 3]))//"1,2,3"
console.log(String([null, undefined]))//","
console.log(String([[[], [], []], []]))//' , , ,'
console.log(String( [,,,,]) )//',,,,'
console.log(String({}));//[object,Object] the Caplital O object is string tag add with a;ll the object.
console.log(String({a:2}));//[object,Object] the Caplital O object is string tag add with all the object.
console.log(String({toString(){return "X";}}));//"X";



//toNumber

//-The toNumber is a bit more interesting cuz a lot of corner cases.

console.log(Number(""));//0
console.log(Number("0"));//0
console.log(Number("-0"));//-0
console.log(Number("  009"));//9
console.log(Number("3.14159"));//3.14159
console.log(Number("0."));//0
console.log(Number(".0"));//0
console.log(Number("."));//NaN


console.log(Number(false));//0
console.log(Number(true));//1
console.log(Number(null));//0
console.log(Number(undefined));//NaN


console.log(Number([""]));//0
console.log(Number(["0"]));//0
console.log(Number(["-0"]));//-0
console.log(Number([null]));//0
console.log(Number([undefined]));//0
console.log(Number([1,2,3]));//NaN
console.log(Number([[[[]]]]));//0

console.log(Number({}));//NaN
console.log(Number({valueOf(){return 3}}));//3


//toBoolean

//The ToBoolean is less algorithmic and more lookup.

//falsey            truthy
//0                   "foo"
//""                    23
//false                {}
//NaN                  [1,2]
//undefined             true
//null                function{}

console.log(Boolean(true));//true
console.log(Boolean(false));//false
console.log(Boolean(1));//true
console.log(Boolean({}));//true
console.log(Boolean(()=>{}));//true
console.log(Boolean(`1`));//true
console.log(Boolean(undefined));//false
console.log(Boolean(""));//false
console.log(Boolean(0/0));//false
console.log(Boolean(null));//false
console.log(Boolean(-456));//true
console.log(!!Boolean(true));//true
console.log(Boolean(class name {//true
    constructor(parameters) {
        
    }
}));
console.log(Boolean(new Boolean()));//true
