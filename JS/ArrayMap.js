// 1. map()
// Definition

// The map() method creates a new array by applying a function to every element of the original array.

//      It does not modify the original array.
//      The returned array always has the same number of elements as the original array.
// Syntax
/* array.map(function(currentValue, index, array) {
    // return transformed value
    });*/

// Or using an arrow function:

// array.map((currentValue, index, array) => {
//     return transformedValue;
// });

let numbers = [1, 2, 3, 4];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);



