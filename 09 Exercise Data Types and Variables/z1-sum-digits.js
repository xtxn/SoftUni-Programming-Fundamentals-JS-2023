function sumDigits(input) {
    let sum = 0;
    let inputString = input.toString();

    for (let index = 0; index < inputString.length; index++) {
        let number = Number(inputString[index]);
        sum += number;
    }
    console.log(sum);
}
sumDigits(543);