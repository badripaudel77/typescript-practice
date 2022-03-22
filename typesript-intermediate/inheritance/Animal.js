var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        console.log("Animal constructor: arg passed has value " + name);
    }
    Animal.prototype.eat = function () {
        console.log("Every animal eats food");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    // inherit the eat method from the parent class
    Dog.prototype.eat = function () {
        console.log("Dog eats meat and is " + this.age + " years old");
    };
    // define its own bark method
    Dog.prototype.bark = function () {
        console.log("Dog Barks !");
    };
    return Dog;
}(Animal));
// Language: typescript
// just to show that we can create an instance Dog class
var dog = new Dog("Tommy", 2);
dog.eat();
dog.bark();
var anotherDog = new Animal("Fido");
anotherDog.eat();
