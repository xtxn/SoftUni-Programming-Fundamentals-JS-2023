function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.push(arr[0]);
        arr = arr.slice(1);
    }
    console.log(arr.join(' '));
}
arrayRotation([32, 21, 61, 1], 4);