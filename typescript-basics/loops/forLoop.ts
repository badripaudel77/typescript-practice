export {}

let citiesInNepal : string[];
citiesInNepal = ['Kathmandu', 'Pokhara', 'Baglung', 'Bharatpur', 'Biratnagar'];

for(let i =0; i< citiesInNepal.length; i++) {
    console.log(`index = ${i} => ${citiesInNepal[i]}`);
}

// forEach loop
citiesInNepal.forEach((city:string, index:number): void => {
    console.log(`index = ${index} => ${citiesInNepal[index]}`);
})

// infinite for loop, for(;;)
// for(;;) {
//     console.log("Infinite Loop");
// }

let names: string[] = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if(name ==='Jane') { // skip the Jane and go to next iteration
        continue; //
    }
    if(name === 'Mark') { // break the loop, exit the loop
        break;
    }   
    console.log(name);
}
