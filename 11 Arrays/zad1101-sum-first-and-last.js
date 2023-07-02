function sumFirstAndLast(array) {
    let first = array[0];
    let last = array[array.length - 1];
    let sum = first + last;
    console.log(sum);
}
sumFirstAndLast([10, 17, 22, 33])