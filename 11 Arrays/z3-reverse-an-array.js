function reverseArray(num, arr) {
    let output = [];

    for (let index = num - 1; index >= 0; index--) {
        output.push(arr[index]);

    }
    console.log(output.join(' '));
}
reverseArray(
    2, [66, 43, 75, 89, 47]
);