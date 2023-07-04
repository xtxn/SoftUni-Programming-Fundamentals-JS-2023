function factorialDivision(num1, num2) {
    let sum = 1;
    let sum1 = 1;
    for (let i = 1; i <= num1; i++) {
        sum = sum * i;
    }
    for (let i = 1; i <= num2; i++) {
        sum1 = sum1 * i;
    }
    console.log((sum / sum1).toFixed(2));
}
factorialDivision(5, 2)