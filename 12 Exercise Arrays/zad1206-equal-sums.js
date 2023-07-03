function equalSums(array) {
    let index = 0;
    let isFound = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        if (array.length === 1) {
            index = i;
            isFound = true;
        } else {
            for (let j = 0; j < i; j++) {
                leftSum += array[j];
            }
            for (let k = array.length - 1; k > i; k--) {
                rightSum += array[k]
            }
        }

        if (leftSum === rightSum) {
            index = i;
            isFound = true;
        }
    }

    if (isFound === true) {
        console.log(index);
    } else {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);