// This algorithm should take an array of numbers as input
// and return the minimun value in the array (i.e the smallest number)
// Define time complexity 

function getMin(numbers) {
    let currentMin = numbers[0]; // 1
    for (const num of numbers) { // 1
        if(num < currentMin) { // n
          currentMin = num; // 0  (Best Case), 2 (Worst Case). 1 (Avg. Case)
        }
     }
     return currentMin; // 1
}

// Best Case: [1, 2, 3] => O(n)
// Worst Case: [3, 2, 1] => O(n)
// Average: [2, 1, 3] => O(n)

console.log(getMin([1, 2, 3,]))
console.log(getMin([5, 9, 3, 6, 1]))

// function getMin(numbers) {
//         return Math.min(...numbers) // 1
// }
// console.log(getMin([2, 6, 8, 9, 10, 0]))


