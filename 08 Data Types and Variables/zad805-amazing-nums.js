function amazingNums(num) {
    let sum = 0;
    let numAsString = num.toString()

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    let amazing = sum.toString().includes('9') ? 'True' : 'False';
    console.log(`${num} Amazing? ${amazing}`);
}
amazingNums(1233);