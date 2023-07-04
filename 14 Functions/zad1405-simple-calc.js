function simpleCalc(num1, num2, operator) {
    let multi = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;
    let res = 0;
    switch (operator) {
        case 'multiply': res = multi(num1, num2); break; l
        case 'divide': res = divide(num1, num2); break; l
        case 'add': res = add(num1, num2); break; l
        case 'subtract': res = subtract(num1, num2); break; l
    }
    console.log(res);
}
simpleCalc(5, 5, 'multiply')