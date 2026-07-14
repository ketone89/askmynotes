// 2. filter()
// Definition

// The filter() method creates a new array containing only the elements that satisfy a condition.

// It does not modify the original array.
// The returned array may have fewer elements than the original.
// Syntax
// array.filter(function(currentValue, index, array) {
//     return condition;
// });
// Example 1: Filter Even Numbers
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);
Output
[2, 4, 6]