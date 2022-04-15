export {}
class Animal {
    name : string;

    constructor(name : string) {
        this.name = name;
        console.log("Animal constructor: arg passed has value " + name);
        
    }

    eat() {
        console.log("Every animal eats food");
    }
}

class Dog extends Animal {
    age : number;
    constructor(name : string, age: number) {
        super(name);
        this.age = age;
    }

     // inherit the eat method from the parent class
    eat() {
        console.log("Dog eats meat and is " + this.age + " years old");
    }

    // define its own bark method
    public bark(): void {
        console.log("Dog Barks !");
    }
}

// Language: typescript
// just to show that we can create an instance Dog class
let dog = new Dog("Tommy", 2);
dog.eat();
dog.bark();

let anotherDog = new Animal("Fido");
anotherDog.eat();
