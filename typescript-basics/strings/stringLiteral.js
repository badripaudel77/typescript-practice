// String Literal Types in TypeScript
// In TypeScript, string literal types let you define types that 
//only accept a defined string literal.
var dog;
dog = 'dog'; // Ok
// dog = 'cat'; // Error as the required type of the variable is dog
console.log("dog: " + dog);
var pet;
pet = 'cat'; // Ok
pet = 'dog'; // Ok
// pet = 'zebra'; // Compiler error
console.log("pet: " + pet);
