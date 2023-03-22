function isPrime(num) {
    let isPrime = true;
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isPrime(
    81
)