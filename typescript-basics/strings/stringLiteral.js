"use strict";
exports.__esModule = true;
exports.dog = void 0;
exports.dog = 'dog'; // Ok
// dog = 'cat'; // Error as the required type of the variable is dog
console.log("dog: " + exports.dog);
var pet;
pet = 'cat'; // Ok
pet = 'dog'; // Ok
// pet = 'zebra'; // Compiler error
console.log("pet: " + pet);
