function reverseArrayNums(n, array) {
    let newArray = [];
    let output = '';
    for (let i = 0; i < n; i++) {
        newArray.push(array[i]);
    }

    for (let j = newArray.length - 1; j >= 0; j--) {
        output += `${newArray[j]} `;
    }

    console.log(output);
}
reverseArrayNums(3, [10, 20, 30, 40, 50]);