function condenseArray(arr) {
    let leftVar;
    let rightVar;
    arr
    while (arr.length > 1) {
        let condensed = [];
        for (let i = 0; i < arr.length - 1; i++) {
            leftVar = arr[i];
            rightVar = arr[i + 1];
            condensed.push(leftVar + rightVar);
        }
        arr = condensed;
        condensed
    }
    console.log(Number(arr));
}
condenseArray([5, 0, 4, 1, 2]);