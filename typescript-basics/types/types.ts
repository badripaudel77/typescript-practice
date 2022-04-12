export // or export {}
/* 
    As when  typescript is transpiled to javascript, any variable name will be present in both
    the javascript and typescript files and it will issue and error , to resolve this, we add export
    or additionally export {} so that it won't be shared in global scope, it would have it's own block.
*/

// defining integer variable
let studentRollNo: number;
studentRollNo = 123456;
console.log("studentRollNo: " + studentRollNo);


let studentAge = 20;
console.log("student's age is " + studentAge);

// studentAge = 'hello ' // gives compile time error as string is not assignable to number

// defining string variable
let studentName:string;
studentName = 'John Doe'.toUpperCase();
console.log("Student Name: " + studentName);
// studentName = 123; // gives compile time error as number is not assignable to string 


// defining boolean variable
let isEligibleToVote: boolean;
isEligibleToVote = studentAge >= 18 ? true : false;
console.log("isEligibleToVote: " + isEligibleToVote);
// isEligibleToVote = 'not'; // error as string is not assignable to boolean

// let's define array with type of string
let studentNames: string[];
studentNames = ['John', 'Smith', 'Jack', 'Joe', 'Alex'];
console.log("studentNames: " + studentNames);

// let's declare object type
let student: {
    name: string,
    age : number,
    address : {
        city: string,
        state: string
    }
}

// defining object
student = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        state: 'NY'
    }
}
console.log("student: " + student.name.toString() + " is " + student.age + " years old and lives in " + student.address.city + ", " + student.address.state);

// I can also do like this to define object type
let student_: object;
student_ = {
    name: 'John',
    age: 20
    // more properties...
}

// defining enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

// defining enum with string values
enum Color2 {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}
console.log(Color2.Green);

// defining function with return type
 let add : (number1: number, number2: number) => number;

 add = (number1: number, number2: number) => {
        return number1 + number2;
 }
console.log("value of add(1,2): " + add(1,2));

 let product = (number1: number, number2: number) => {
    return number1 + number2;
}
console.log("value of product(10,12) is : " + product(10,12));

