function printNthElement(array) {
    let step = Number(array[array.length - 1]);
    let output = '';
    for (let i = 0; i < array.length - 1; i = i + step) {
        output += `${array[i]} `;
    }
    console.log(output);
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])