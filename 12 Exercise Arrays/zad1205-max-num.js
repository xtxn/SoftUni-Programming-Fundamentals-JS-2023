function maxNum(arr) {
    let result = [];
    let isTop = false;
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result.push(arr[i]);
            break;
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                isTop = true;
            } else {
                isTop = false;
                break;
            }
        }

        if (isTop === true) {
            result.push(arr[i]);
        }
    }
    console.log(result.join(' '));
}
maxNum([27, 19, 42, 2, 13, 45, 48]);