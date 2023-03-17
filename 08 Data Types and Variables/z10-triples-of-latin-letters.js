function triplesLetters(num) {
    for (let x = 0; x < num; x++) {

        for (let y = 0; y < num; y++) {

            for (let z = 0; z < num; z++) {
                console.log(`${String.fromCharCode(97 + x)}${String.fromCharCode(97 + y)}${String.fromCharCode(97 + z)}`);
            }
        }
    }
}
triplesLetters(3);