function rotateArray(array) {
    let rotations = Number(array[array.length - 1]);
    let startArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        startArray.push(array[i]);
    }

    for (let j = 1; j <= rotations; j++) {
        let temp = startArray[startArray.length - 1];
        startArray.splice(-1);
        startArray.unshift(temp);
    }

    console.log(startArray.join(' '));
}
rotateArray(
    ['Banana', 'Orange', 'Coconut', 'Apple', '15']
)
