function maxNumber(arr) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        let isBiggler = true;
        let currentNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumber <= arr[j]) {
                isBiggler = false;
            }

        }
        if (isBiggler) {
            resultArray.push(arr[i]);
        }

    }
    console.log(resultArray.join(' '));
}
maxNumber(
    [27, 19, 42, 2, 13, 45, 48]
)