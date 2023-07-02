function equalArrays(arr1, arr2) {
    let indexCounter = 0;
    let isIdentical = true;
    let sum = 0;
    for (let j = 0; j < arr1.length; j++) {
        sum += Number(arr1[j]);
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
            continue;
        } else {
            indexCounter = i;
            isIdentical = false;
            break;
        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30'])