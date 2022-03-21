 // java style class with types 
class Student {
    fullName : string;
    rollNo : number;
    age : number;

    constructor(rollNo: number, fullName: string, age: number) {
        this.rollNo = rollNo;
        this.fullName = fullName;
        this.age = age;
    }

  getPersonalInfo() : string {
      return  `${this.fullName} has roll number ${this.rollNo} in college and is ${this.age} years old.`;
  }  
}

let student = new Student(12345, "John", 20);
console.log(student.getPersonalInfo());
