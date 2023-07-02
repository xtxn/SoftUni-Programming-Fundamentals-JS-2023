function reverseInPlace(array) {
    let output = '';
    for (let i = array.length - 1; i >= 0; i--) {
        output += `${array[i]} `
    }

    console.log(output);
}
reverseInPlace(['33', '123', '0', 'dd']);