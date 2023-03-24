function sumEvenNum(arr) {
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        }
    }
    console.log(evenSum);
}

sumEvenNum(['1', '2', '3', '4', '5', '6']);