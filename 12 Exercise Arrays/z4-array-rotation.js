function arrayRotation(arr1, n) {
    for (let i = 0; i < n; i++) {
        let numberToMove = arr1.shift()
        arr1.push(numberToMove);
    }
    console.log(arr1.join(' '));
}
arrayRotation(
    [51, 47, 32, 61, 21], 2
) 