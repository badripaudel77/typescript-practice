// getter and setter 
/*
 get and set are used to access and modify the properties of an object.

*/
var Human = /** @class */ (function () {
    // constructor is used to initialize the properties of an object
    function Human() {
    }
    Object.defineProperty(Human.prototype, "getName", {
        // getter
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var human = new Human();
human.name = "Human";
console.log(human.getName);
