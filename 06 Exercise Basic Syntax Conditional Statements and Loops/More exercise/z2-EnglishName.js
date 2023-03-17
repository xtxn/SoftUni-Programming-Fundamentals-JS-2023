function lastDigit(num) {
    let number = num.toString();
    let lastNumber = number.slice(-1);
    switch (lastNumber) {
        case '0': lastNumber = 'zero'; break;
        case '1': lastNumber = 'one'; break;
        case '2': lastNumber = 'two'; break;
        case '3': lastNumber = 'three'; break;
        case '4': lastNumber = 'four'; break;
        case '5': lastNumber = 'five'; break;
        case '6': lastNumber = 'six'; break;
        case '7': lastNumber = 'seven'; break;
        case '8': lastNumber = 'eight'; break;
        case '9': lastNumber = 'nine'; break;
    }
    console.log(lastNumber);
}

lastDigit(1246956);