function addSubtract(array) {
    let newArr = [];
    let originalArrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArr.push(array[i] + i);
        } else {
            newArr.push(array[i] - i);
        }
        originalArrSum += array[i];
        newArrSum += newArr[i];

    }
    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);
}
addSubtract([5, 15, 23, 56, 35]);