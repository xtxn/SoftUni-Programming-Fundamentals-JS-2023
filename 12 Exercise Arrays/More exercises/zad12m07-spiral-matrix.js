function spiralMatrix(row, col) {
    let matrix = [];
    let counter = 1;

    for (let i = 0; i < row; i++) {
        matrix.push([]);
    }

    let startRow = 0;
    let endRow = row - 1;
    let startColumn = 0;
    let endColumn = col - 1;
    while (startColumn <= endColumn && startRow <= endRow) {

        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++

        // right column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++
        }
        endColumn--;

        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++
        }
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    // console.table(matrix);
    for (let i = 0; i < row; i++) {
        console.log(matrix[i].join(' '));
    }

}
spiralMatrix(5, 5)