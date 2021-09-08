function fact(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result = result * i
    }
    return result;
}

// O(n)

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
