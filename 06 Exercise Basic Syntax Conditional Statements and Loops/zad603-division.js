function division(num) {
    let number = 0;
    let isDivisible = true;
    if (num % 10 === 0) {
        number = 10;
    } else if (num % 7 === 0) {
        number = 7;
    } else if (num % 6 === 0) {
        number = 6;
    } else if (num % 3 === 0) {
        number = 3;
    } else if (num % 2 === 0) {
        number = 2;
    } else {
        isDivisible = false;
        console.log('Not divisible');
    }
    if (isDivisible) {
        console.log(`The number is divisible by ${number}`);
    }
}
division(1643);