// syntax : let arrayName: type[];

let fruits: string[]; // declare the fruits array of type string
fruits = ["Apple", "Banana", "Orange"]; // initialize the array
console.log("fruits: " + fruits);

let skills = ["HTML", "CSS", "JavaScript"];
skills.push("TypeScript"); // add an element to the end of the array
skills[0] = "HTML5"; // replace the first element of the array
// skills[1] = 123; // error as the required type of the second element is string
console.log("skills: " + skills);

// let's define an array of either string or number
let mixedArray = ['Apple', 123, 'Banana', 456];
console.log("js type mixedArray: " + mixedArray); // noraml 

let mixedArray_: (string | number)[]; // either number or string
mixedArray_ = ['Apple', 123, 'Banana', 456, 'TypeScript'];
console.log("ts type mixedArray: " + mixedArray_); // typescript type mixed array

// tuple in typescript
let tuple: [string, number]; // fixed number of items string and a number and order is important
tuple = ['Apple', 123];
// tuple = [23, 'orange']; // error as error matching the tuple type [order matters here]
console.log("tuple: " + tuple); 



