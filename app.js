// Write an algorithm that takes an array of numbers as input and 
// calculates the sum of those numbers

// Define the Time Complexity of that algorithm and determine what 
// the lowest possible Time Complexity is for this problem.

// numbers = [1, 3, 10, 50]

function sumNumbers(numbers) {
  let result = 0; // 1 
  for(const number of numbers) { // 1 
    console.log('...')
    result += number; // 4 => n 
  }
  return result; // 1 code runs once
}

console.log(sumNumbers([1, 3, 10]))

// T = 1 + 1 + 1 + 1 + n + n = 3 + n = 3 + 1*n
// T = 1*n
// T = n linear time complexity