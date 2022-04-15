export

class Human {
    private name:string;
    private age: number;

     constructor(name:string, age: number) {
         this.age = age;
         this.name = name;
         console.log(`from constructor in ts- values are : ${this.name} is ${this.age} years old`);
    }
}

class John extends Human {
    private canDance:boolean = true; // john has specific ppt which is he can dance
    constructor() {
        super('John', 23); //calls the constructor of the super class which accepts two arguments :
        console.log(`John can ${this.canDance?'dance' : 'not dance'}`)
    }
}

const johnObject:John = new John();
const smith:Human = new Human('smith',33); 
const dane:Human = new John();