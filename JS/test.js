const arr=[1,2,3,4,5]
const arrmap=arr.map((value)=>{     //Map method creates a new array by applying a function to each element of the original array.
    return value*2
});

console.log(arrmap); // Output: [2, 4, 6, 8, 10]

const arrfilter=arr.filter((value)=>{   //Filter method creates a new array with all elements that pass the test implemented by the provided function.
    return value>2
}   );

console.log(arrfilter); // Output: [3, 4, 5]

const arrreduce=arr.reduce((accumulator,currentValue)=>{   //Reduce method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
    return accumulator+currentValue
});

console.log(arrreduce); // Output: 15   