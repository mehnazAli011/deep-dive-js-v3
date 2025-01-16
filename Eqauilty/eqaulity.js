//Double Equlaity                  VS               Triple Equality

//In simple trem Double equality check both type and value after convert both type to common type,while triple equality check both type and value without any type conversion.

//let's understand with example

var x = 3;
var y ="3";
console.log(x==y);//true ???




//behind the scenes
// memory   |check value | type     |   type conversion |after     | comparision     |result
//                                                     type conversion
// x=3      |  3         | number   |   no-conversion   |  3-number |  3==3          |true
//y="3"     |  3         |string    |   toNumber("3")   |  3-number |                |



var x= 3;
var y ="3";
console.log(x===y);//false
//behind the scenes
// memory   |check value | type     |    comparision                   |result
//                                                     
// x=3      |  3         | number   |   3==="3"                        | false
//y="3"     |  3         |string    |   value is same but type if diff |             



//then see double equal allow type converstion bot,triple equality not allow ,it strictly check is both type and value is equal then retrun true otherwies always return false.


//which one use??
//double eqaulity:- Double equality allow type conversion give unexpected result.

//Triple equality:-Give the expected result without any confustion.



//DO EXCISE FOR PRACTICE:-
console.log(3=="3");//true
console.log(3==3);//true
console.log(true==1);// 1==1 true
console.log(true==0);//1==0 false
console.log(false==0);//0==0 false
console.log(NaN==NaN)//false
console.log(undefined==null);//true becuase eqaul each other in JS
console.log(0=="");//0==0 true
console.log("null"==null);//NaN==0 false
console.log(undefined==0);///false
console.log('hello'==5);//NaN==5 false
console.log({name:'Alice'}=='Alice');//"[object Object]"==NaN false
console.log([1,2,3]==[1,2,3]);//different object in momory
