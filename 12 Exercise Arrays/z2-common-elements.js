function commonElements(arr1, arr2) {
    for (let x of arr1) {
        for (let y of arr2) {
            if (x === y) {
                console.log(x);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)