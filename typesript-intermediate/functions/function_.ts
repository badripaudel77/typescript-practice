// function that takes a function as an argument and returns a message
function greet(greetMessage: string) : string {
  return "Hola, " + greetMessage;
}
let message: string = greet("buenas dia amigo.");
console.log(message);

// function to add two numbers
let add = (num1:number, num2:number) => {
       return num1 + num2;
}
console.log(`Result of add ${add(10, 20)}`);

// function type [ like declaring function in a class ]
let multiply : (a: number, b:number) => number; 
// defining 
multiply = (n1: number, n2: number) => {
    return n1 * n2;
}
console.log(`Result of multiply ${multiply(10, 20)}`);

// optional parameters
let optional : (a: number, b?: number) => number; // declaring
optional = (n1: number, n2?: number) => { 
    if(n2){
        return n1 * n2;
    }
    else{
        return n1;
    }
}
console.log(`Result of optional with one missing: ${optional(10)}`);
console.log(`Result of not missing optinal : ${optional(10, 20)}`);

// default parameters, must be at the end order parameter
let eligibleToVote = (country: string,age: number =18) => {
    if(age >=18 && country=== 'Nepal') {
        return "Eligible in Nepal";
    }
    else {
        return "Not Eligible in Nepal";
    }
}

console.log("default param : " + eligibleToVote('Nepal'));
console.log("default param : " + eligibleToVote('Nepal', 10));

// rest parameters
// can pass indefinite number of arguments
let sum = (...nums: number[]) => {
   console.log("rest parameters : " + nums);
}

sum(1,2,3,4,5); sum(1,2,3,4,5,6,7,8,9,10);
