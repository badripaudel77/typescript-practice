/*
* Generics basically allows us to generalize functions, methods, classes, interfaces etc.
* Ref : https://www.typescripttutorial.net/typescript-tutorial/typescript-generics/
*/
export {}

function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    let randomElement = items[randomIndex]
    return randomElement;
}

console.log(`Random element from given array is : ${getRandomElement([1,2,3,4,5,6,7])}`);

console.log(`Random element from given array is : ${getRandomElement([1,2,3,4,5,6,7,'hell0'])}`); // its fine as it can work with any data type 


function mergeData<T1, T2>(obj1 : T1, obj2:T2) {
    return {
        ...obj1,
        ...obj2
    }
}

console.log('Merged objects to one : ', mergeData({'name': 'Badri'}, {'Major': 'CS'}))


// In above example , we can pass type of anything 
// console.log('Merged objects to one : ', mergeData(23, {'Major': 'CS'})) // works
// but we may want to restrict the type, with generic constraints we can do that. 
function mergeData_<A extends object, B extends object>(a: A, b:B) {
    return {
        ...a,
        ...b
    }
}

console.log("Merged Data : ", mergeData_({'name': 'John'}, {'age':33}))
// console.log("Merged Data : ", mergeData_(33, {'age':33})) // compiler error as 33 isn't object type
