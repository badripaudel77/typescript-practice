// function that takes a function as an argument and returns a message
function greet(greetMessage) {
    return "Hola, " + greetMessage;
}
var message = greet("buenas dia amigo.");
console.log(message);
// function to add two numbers
var add = function (num1, num2) {
    return num1 + num2;
};
console.log("Result of add ".concat(add(10, 20)));
// function type [ like declaring function in a class ]
var multiply;
// defining 
multiply = function (n1, n2) {
    return n1 * n2;
};
console.log("Result of multiply ".concat(multiply(10, 20)));
// optional parameters
var optional; // declaring
optional = function (n1, n2) {
    if (n2) {
        return n1 * n2;
    }
    else {
        return n1;
    }
};
console.log("Result of optional with one missing: ".concat(optional(10)));
console.log("Result of not missing optinal : ".concat(optional(10, 20)));
// default parameters, must be at the end order parameter
var eligibleToVote = function (country, age) {
    if (age === void 0) { age = 18; }
    if (age >= 18 && country === 'Nepal') {
        return "Eligible in Nepal";
    }
    else {
        return "Not Eligible in Nepal";
    }
};
console.log("default param : " + eligibleToVote('Nepal'));
console.log("default param : " + eligibleToVote('Nepal', 10));
// rest parameters
// can pass indefinite number of arguments
var sum = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log("rest parameters : " + nums);
};
sum(1, 2, 3, 4, 5);
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
