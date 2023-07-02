function sumEvenNums(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let asNumber = Number(array[i]);
        if (asNumber % 2 === 0) {
            sum += asNumber
        }
    }
    console.log(sum);

}
sumEvenNums(['3', '5', '7', '9']);