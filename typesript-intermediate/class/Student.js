// java style class with types 
var Student = /** @class */ (function () {
    function Student(rollNo, fullName, age) {
        this.rollNo = rollNo;
        this.fullName = fullName;
        this.age = age;
    }
    Student.prototype.getPersonalInfo = function () {
        return "".concat(this.fullName, " has roll number ").concat(this.rollNo, " in college and is ").concat(this.age, " years old.");
    };
    return Student;
}());
var student = new Student(12345, "John", 20);
console.log(student.getPersonalInfo());
