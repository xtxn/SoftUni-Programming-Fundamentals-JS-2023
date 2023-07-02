function condenseArrayToNum(array) {
    let condensed = [];
    if (array.length === 1) {
        console.log(`${array[0]}`);
    } else {
        while (array.length !== 1) {
            for (let i = 0; i < array.length - 1; i++) {
                condensed[i] = (array[i] + array[i + 1]);

            }
            array = condensed;
            condensed = [];
        }
        console.log(Number(array));
    }
}

condenseArrayToNum([5, 0, 4, 1, 2]);