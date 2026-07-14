// 3. reduce()

// The reduce() method reduces all elements of an array to a single value, such as:

// Sum
// Product
// Maximum
// Minimum
// Average
// Object
// String
// Syntax
array.reduce(function(accumulator, currentValue) {
    return updatedAccumulator;
}, initialValue);

let numbers = [10, 20, 30, 40];

let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);