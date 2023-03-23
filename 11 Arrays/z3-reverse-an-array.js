function reverseArray(num, arr) {
    let output = '';

    for (let index = num - 1; index >= 0; index--) {
        output += arr[index] + ' ';

    }
    console.log(output);
}
reverseArray(
    2, [66, 43, 75, 89, 47]
);