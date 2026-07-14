// 1. var
// Function-scoped.
// Can be redeclared and reassigned.
// Avoid using it in modern JavaScript because it can lead to unexpected behavior.
// var x = 10;
// var x = 20;   // Allowed
// x = 30;       // Allowed

// console.log(x); // 30

// Example of function scope:

// if (true) {
//     var a = 5;
// }

// console.log(a); // 5
// 2. let
// Block-scoped.
// Can be reassigned but cannot be redeclared in the same scope.
// let age = 25;
// age = 26;      // Allowed

// // let age = 30; // Error

// Example:

// if (true) {
//     let b = 10;
// }

// console.log(b); // Error: b is not defined
// 3. const
// Block-scoped.
// Must be initialized when declared.
// Cannot be reassigned.
// const PI = 3.14;

// // PI = 3.14159; // Error