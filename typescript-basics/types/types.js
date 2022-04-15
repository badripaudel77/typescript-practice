"use strict";
exports.__esModule = true;
exports.studentRollNo = void 0;
exports.studentRollNo = 123456;
console.log("studentRollNo: " + exports.studentRollNo);
var studentAge = 20;
console.log("student's age is " + studentAge);
// studentAge = 'hello ' // gives compile time error as string is not assignable to number
// defining string variable
var studentName;
studentName = 'John Doe'.toUpperCase();
console.log("Student Name: " + studentName);
// studentName = 123; // gives compile time error as number is not assignable to string 
// defining boolean variable
var isEligibleToVote;
isEligibleToVote = studentAge >= 18 ? true : false;
console.log("isEligibleToVote: " + isEligibleToVote);
// isEligibleToVote = 'not'; // error as string is not assignable to boolean
// let's define array with type of string
var studentNames;
studentNames = ['John', 'Smith', 'Jack', 'Joe', 'Alex'];
console.log("studentNames: " + studentNames);
// let's declare object type
var student;
// defining object
student = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        state: 'NY'
    }
};
console.log("student: " + student.name.toString() + " is " + student.age + " years old and lives in " + student.address.city + ", " + student.address.state);
// I can also do like this to define object type
var student_;
student_ = {
    name: 'John',
    age: 20
    // more properties...
};
// defining enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// defining enum with string values
var Color2;
(function (Color2) {
    Color2["Red"] = "Red";
    Color2["Green"] = "Green";
    Color2["Blue"] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Green);
// defining function with return type
var add;
add = function (number1, number2) {
    return number1 + number2;
};
console.log("value of add(1,2): " + add(1, 2));
var product = function (number1, number2) {
    return number1 + number2;
};
console.log("value of product(10,12) is : " + product(10, 12));
// void type
function greet() {
    console.log("message is : greeting from typescript [void message]");
}
greet();
