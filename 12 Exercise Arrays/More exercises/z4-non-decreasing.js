function nonDecreasingSubset(array) {

    if (array.length === 0) {
        return '';
    }

    let filteredArray = [array[0]];

    for (let i = 1; i < array.length; i++) {
        if (array[i] >= Math.max.apply(null, array.slice(0, i))) {
            filteredArray.push(array[i]);
        }
    }

    console.log(filteredArray.join(' '));
}

nonDecreasingSubset(
    [1, 3, 8, 4, 10, 12, 3, 2, 24]
)
