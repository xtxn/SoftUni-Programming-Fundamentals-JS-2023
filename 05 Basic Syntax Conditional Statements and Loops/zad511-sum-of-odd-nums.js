function sumOfOddNums(num) {
    let sum = 0;
    let oddNum = 1;
    for (i = 1; i <= num; i++) {
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNums(3)