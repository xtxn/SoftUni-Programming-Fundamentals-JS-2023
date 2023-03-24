function evenOddSubtract(arr) {
    let difference = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            difference += num;
        } else {
            difference -= num;
        }
    }
    console.log(difference);
}
evenOddSubtract([3, 5, 7, 9]);