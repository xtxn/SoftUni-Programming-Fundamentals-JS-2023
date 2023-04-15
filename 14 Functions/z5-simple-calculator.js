function simpleCalculator(num1, num2, operator) {
    let result = 0;
    function multi() {
        return num1 * num2;
    }
    function div() {
        return num1 / num2;
    }
    function add() {
        return num1 + num2;
    }
    function sub() {
        return num1 - num2;
    }

    switch (operator) {
        case 'multiply': result = multi(num1, num2);
            break;
        case 'divide': result = div(num1, num2)
            break;
        case 'add': result = add(num1, num2);
            break;
        case 'subtract': result = sub(num1, num2);
            break;
    }
    console.log(result);
}
simpleCalculator(
    50,
    13,
    'subtract'
)