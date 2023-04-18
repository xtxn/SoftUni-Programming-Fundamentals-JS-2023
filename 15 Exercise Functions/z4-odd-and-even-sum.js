function oddAndEvenSum(num) {
    let string = num.toString();
    let oddSum = 0;
    let evenSum = 0;
    for (let char of string) {
        let currentNum = Number(char)
        if (currentNum % 2 === 0) {
            evenSum += currentNum
        }
        else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(3495892137259234)