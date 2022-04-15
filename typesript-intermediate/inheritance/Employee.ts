export
// abstract class, just like in Java
abstract class Employee {
    protected name: string;
    protected salary: number;
    protected age: number;

    constructor(name: string, salary: number, age: number) {
        this.name = name;
        this.salary = salary;
        this.age = age;
    }

    abstract getName() : string;
    abstract getSalary() : number;

    getAge() : number {
        return this.age;
    }
}

class Developer extends Employee {
    constructor(name: string, salary: number, age: number) {
        super(name, salary, age);
    }

    getName() : string {
        return this.name;
    }

    getSalary() : number {
        return this.salary;
    }
}

// let emp = new Employee("John", 1000, 30); // error as Employee is abstract

let employee = new Developer("John", 1000, 30);
console.log(employee.getName());
console.log(employee.getSalary());
console.log(employee.getAge());
