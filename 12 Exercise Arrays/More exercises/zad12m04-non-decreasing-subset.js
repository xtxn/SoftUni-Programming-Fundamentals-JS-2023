function nonDecreasingSubset(array) {
    let biggest = array[0];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggest) {
            biggest = array[i];
            newArray.push(biggest);
        }
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubset([20, 3, 2, 15, 6, 1])