// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
// console.log(blockVar);
// console.log(blockLet);
// function show(){
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
//     }
//     show();
    
//     console.log(functionVar); // Throws ReferenceError
//     console.log(functionLet); // Throws ReferenceError
//     console.log(functionConst); // Throws ReferenceError

{
    let blkLet = 1;
    var blkVar = 2;
    const blkConst = 3;
    // blkLet = 1;
    // blkVar = 2;
    // blkConst = 3;
    // console.log(blkLet);
    // console.log(blkVar);
    // console.log(blkConst);
}

    blkLet = 4;
    blkVar = 5;
    blkConst = 6;
    console.log(blkLet);
    console.log(blkVar);
    console.log(blkConst);