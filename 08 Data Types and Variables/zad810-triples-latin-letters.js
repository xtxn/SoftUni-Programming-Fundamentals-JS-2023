function triplesLatinLetters(num) {

    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            for (k = 0; k < num; k++) {
                console.log(`${String.fromCharCode(97 + i)}${String.fromCharCode(97 + j)}${String.fromCharCode(97 + k)}`);
            }
        }
    }
}
triplesLatinLetters('3');