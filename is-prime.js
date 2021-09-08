// Determine wether on input number is a prime number and
// Algorithm needs to do one thing: 
// (1) Try dividing the number by all smaller numbers and return true
// if it's only divisible by itself and 1 

function isPrime(n) {
    for (let i = 2; i < n ; i++) { // 1
        // i < Math.sqrt(n)
        console.log('Running') 
        if(n % i === 0) { // n 
            return false; // 1
        } 
    }
    return true; // 1
}

// Best Case: nubmer = 1 OR number = 2 => O(1)
// Average Case: O(n) = 1
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

console.log(isPrime(5))
console.log(isPrime(9))