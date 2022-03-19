// syntax : let arrayName: type[];
var fruits; // declare the fruits array of type string
fruits = ["Apple", "Banana", "Orange"]; // initialize the array
console.log("fruits: " + fruits);
var skills = ["HTML", "CSS", "JavaScript"];
skills.push("TypeScript"); // add an element to the end of the array
skills[0] = "HTML5"; // replace the first element of the array
// skills[1] = 123; // error as the required type of the second element is string
console.log("skills: " + skills);
// let's define an array of either string or number
var mixedArray = ['Apple', 123, 'Banana', 456];
console.log("js type mixedArray: " + mixedArray); // noraml 
var mixedArray_; // either number or string
mixedArray_ = ['Apple', 123, 'Banana', 456, 'TypeScript'];
console.log("ts type mixedArray: " + mixedArray_); // typescript type mixed array
