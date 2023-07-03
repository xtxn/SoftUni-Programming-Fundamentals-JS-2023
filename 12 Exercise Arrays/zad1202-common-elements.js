function commonElements(arr1, arr2) {
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++) {
        if (arr2.includes(arr1[i])) {
            console.log(arr1[i]);
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])