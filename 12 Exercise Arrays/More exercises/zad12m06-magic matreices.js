function magicMatrices(array) {
    let rowSum = 0;
    let columnSum = 0;
    let checkSum = 0;
    let isMagic = true;
    for (let i = 0; i < array[0].length; i++) {
        checkSum += array[0][i];
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            columnSum += array[i][j];
            rowSum += array[j][i];
        }

        if (rowSum !== checkSum || columnSum !== checkSum) {
            isMagic = false;
            break;
        }
        rowSum = 0;
        columnSum = 0
    }

    if (isMagic) {
        console.log(true);
    } else {
        console.log(false);
    }
}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);