// getter and setter 
/*
 get and set are used to access and modify the properties of an object.

*/

class Human {

    name: string; // public by default
    protected age : number; // protected accessible only in this class and in subclasses
    private password : string; // only accessible in this class

    // constructor is used to initialize the properties of an object
    constructor() {
    }

   // getter
   get getName() : string {
         return this.name;
   } 

   set setName(name: string) {
       this.name = name;
   }

}

let human = new Human();
human.name = "Human";
console.log(human.getName);