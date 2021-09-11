function factorial(fact) {
    if (fact == 1) {
        // 1 == 1 hoile ar nicher factorial ta call hbe na
        return 1;
    }
    return factorial(5 - 1);
}
// factorial(5 - 1) * 5
// factorial(4 - 1) * 4 * 5
// factorial(3 - 1) * 3 * 4 * 5
// factorial(2 - 1) * 2 * 3 * 4 * 5
// 1 * 2 * 3 * 4 * 5
console.log(factorial(5));