function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isFound = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let leftNum = arr[j];
            leftSum += leftNum;
        }
        for (let k = i + 1; k < arr.length; k++) {
            let rightNum = arr[k];
            rightSum += rightNum;
        }
        if (rightSum === leftSum) {
            console.log(i);
            isFound = true;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (isFound === false) {
        console.log('no');
    }
}
equalSums(
    [1, 2]
)