function specialNum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        let numToString = i.toString();
        if (i < 10) {
            if (i % 5 === 0 || i % 7 === 0 && i < 10) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
        } else {
            for (j = 0; j < numToString.length; j++) {
                sum += Number(numToString[j]);
            }
            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`);
            } else {
                console.log(`${i} -> False`);
            }
            sum = 0;
        }
    }
}
specialNum(20);