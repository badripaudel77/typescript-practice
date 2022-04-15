class ValidateEmail {
    static isEmailValid(formatedEmail:string) : boolean {
       return formatedEmail.indexOf('@gmail.com') != -1;
   }
} 

let isValid: boolean = ValidateEmail.isEmailValid('hello@gmail.com');
console.log(`Is Valid ? ${isValid}`);

let isValidAgain: boolean = ValidateEmail.isEmailValid('hello@yahoo.com');
console.log(`Is Valid ? ${isValidAgain}`);