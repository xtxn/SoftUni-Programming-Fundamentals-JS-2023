function nxnMatrix(num) {

    for (let i = 0; i < num; i++) {
        let row = '';
        for (let i = 0; i < num; i++) {
            row += `${num} `
        }
        console.log(row);
    }
}
nxnMatrix(7);