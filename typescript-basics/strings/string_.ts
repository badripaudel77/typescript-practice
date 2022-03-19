export

let name : string; // string = primitive type, String = class type
name = "John Doe";
console.log("name: " + name);

name  = "Coding  Guides";
console.log("name: " + name);

let address  = new String('123 Main Street'); // String is of Object type, consturctor of String is used
console.log("address: " + address);

let greeting : string;
greeting = `Hello ${name}`;
console.log("greeting: " + greeting);