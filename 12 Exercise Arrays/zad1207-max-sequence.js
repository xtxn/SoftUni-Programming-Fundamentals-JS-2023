function maxSequence(arr) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
            arr1.push(arr[i]);
            if (arr1.length > arr2.length) {
                arr2 = arr1;
            }
            if (arr[i] !== arr[i + 1]) {
                arr1 = [];
            }
        }
    }
    console.log(arr2.join(' '));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])