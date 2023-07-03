function rotateArray(array) {
    let rotations = array[Number(array.length - 1)];
    let last = array[array.length - 2]
    array.pop(1);
    array
    for (let i = 0; i < rotations; i++) {
        let buff = array[Number(array.length - 1)];
        array.unshift(buff);
        array.pop(1);
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2'])