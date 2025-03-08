
_________________________________________________________________________________________

##### For References : https://www.typescripttutorial.net/
Author of this REPO : badripaudel77

_________________________________________________________________________________________
### INTRODUCTION :
   => TypeScript is Typed JavaScript. TypeScript adds types to JavaScript to help you speed up the development by catching errors before you even run the JavaScript code.

###   

- Typescript is a superset of Javascript, meaning every valid javascript code is valid typscript code as types are optional but using types gives more control for the code maintainability.
- Typescript gives the compiled time error as it is statically typed language, thus helping in catching compile time errors which is really beneficial for the applications debugging and more.
- Typescript code under the hood, gets compiled to javascript which is understood by the browser. i.e .ts -----> .js [transpiled is what is used as a technical term]
- Adding  ```export {} ``` at the top of the file makes a typescript file a separate module thus avoiding error.
- To compile / transpile we use typescript typescript compiler, and do this on command : 
    ``` tsc fileName.ts ```
    The above line will generate  ``` fileName.js ``` file which is the final file to run which we can run as : 
     ``` node fileName.js ```
   If want to achieve the same thing at one go , we have a wasy : 
    ``` tsc fileName.ts && node fileName.js ```
