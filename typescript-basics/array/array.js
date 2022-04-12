"use strict";
exports.__esModule = true;
exports.fruits = void 0;
exports.fruits = ["Apple", "Banana", "Orange"]; // initialize the array
console.log("fruits: " + exports.fruits);
var skills = ["HTML", "CSS", "JavaScript"];
skills.push("TypeScript"); // add an element to the end of the array
skills[0] = "HTML5"; // replace the first element of the array
// skills[1] = 123; // error as the required type of the second element is string
console.log("skills: " + skills);
// let's define an array of either string or number
var mixedArray = ['Apple', 123, 'Banana', 456];
console.log("js type mixedArray: " + mixedArray); // noraml 
var mixedArray_; // either number or string [ union operator]
mixedArray_ = ['Apple', 123, 'Banana', 456, 'TypeScript'];
console.log("ts type mixedArray: " + mixedArray_); // typescript type mixed array
// tuple in typescript
var tuple; // fixed number of items string and a number and order is important
tuple = ['Apple', 123];
// tuple = [23, 'orange']; // error as error matching the tuple type [order matters here]
console.log("tuple: " + tuple);
// type of any , this is also a default type if not specified
var anyVariable;
anyVariable = 'Apple';
anyVariable = 123;
console.log("anyVariable: " + anyVariable);
// void type
var voidVariable;
voidVariable = undefined;
// voidVariable = 12; // error as the required type of the variable is void
console.log("voidVariable: " + voidVariable);
