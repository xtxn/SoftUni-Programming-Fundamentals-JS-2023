function signCheck(num1, num2, num3) {
    let negativeSign = 0;
    let array = [num1, num2, num3];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeSign++
        }
    }
    if (negativeSign % 2 !== 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
signCheck(-1,
    -2,
    -3);