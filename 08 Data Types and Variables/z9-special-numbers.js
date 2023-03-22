function specialNumbers(num) {
    let sum = 0;

    for (let result = 1; result <= num; result++) {
        result = result.toString();
        // console.log(result);

        for (let j = 0; j < result.length; j++) {
            sum += Number(result[j]);
        }
        switch (sum) {
            case 5:
            case 7:
            case 11:
                console.log(`${result} -> True`);
                break;
            default:
                console.log(`${result} -> False`);
                break;
        }
        sum = 0;
    }
}
specialNumbers(20);
