export {}

let gender: string;
gender = 'MALE'
// gender = 'FEMALE';

switch(gender) {
   case 'MALE':
       console.log("Gender is MALE");
       break;
   case 'FEMALE':
       console.log("Gender is FEMALE");
       break;
    default: 
    console.log("Unknown Gender");       
}