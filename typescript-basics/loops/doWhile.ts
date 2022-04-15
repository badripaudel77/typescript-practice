export {}
let names: string[] = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

let index : number = 0;
do {
    const name = names[index];
    console.log(name);
    index++;
}
while (names.length >index);