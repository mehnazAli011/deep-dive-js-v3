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