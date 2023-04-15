function printNthElement(array) {
    let nthStep = Number(array[array.length - 1]);
    let elementArray = [];
    for (let index = 0; index < array.length - 1; index = index + nthStep) {
        elementArray.push(array[index]);
    }
    console.log(elementArray.join(' '))
}
printNthElement(
    ['1', '2', '3', '4', '5', '6']
)