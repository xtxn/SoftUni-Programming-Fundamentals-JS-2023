function magicSum(array, num) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) === num) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}
magicSum(
    [14, 20, 60, 13, 7, 19, 8],
    27
)