function primeNum(num) {

    let isPrime = true;
    if (num === 2 || num === 3 || num === 5 || num === 7) {
        isPrime;
    } else if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
        isPrime = false;
    } else {
        isPrime
    }

    console.log(isPrime);
}
primeNum(8)