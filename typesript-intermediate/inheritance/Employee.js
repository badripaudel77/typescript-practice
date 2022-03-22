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
// abstract class, just like in Java
var Employee = /** @class */ (function () {
    function Employee(name, salary, age) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary, age) {
        return _super.call(this, name, salary, age) || this;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    return Developer;
}(Employee));
// let emp = new Employee("John", 1000, 30); // error as Employee is abstract
var employee = new Developer("John", 1000, 30);
console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
