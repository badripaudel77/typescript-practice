"use strict";
exports.__esModule = true;
var citiesInNepal;
citiesInNepal = ['Kathmandu', 'Pokhara', 'Baglung', 'Bharatpur', 'Biratnagar'];
for (var i = 0; i < citiesInNepal.length; i++) {
    console.log("index = ".concat(i, " => ").concat(citiesInNepal[i]));
}
// forEach loop
citiesInNepal.forEach(function (city, index) {
    console.log("index = ".concat(index, " => ").concat(citiesInNepal[index]));
});
// infinite for loop, for(;;)
// for(;;) {
//     console.log("Infinite Loop");
// }
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
for (var i = 0; i < names.length; i++) {
    var name_1 = names[i];
    if (name_1 === 'Jane') { // skip the Jane and go to next iteration
        continue; //
    }
    if (name_1 === 'Mark') { // break the loop, exit the loop
        break;
    }
    console.log(name_1);
}
