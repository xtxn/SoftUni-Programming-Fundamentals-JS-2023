function sortNum(num1, num2, num3) {
    let numArray = [num1, num2, num3];
    let sortedArray = numArray.sort((a, b) => b - a);

    for (let i = 0; i < sortedArray.length; i++) {
        console.log(sortedArray[i]);
    }
}
sortNum(0, 0, 2)