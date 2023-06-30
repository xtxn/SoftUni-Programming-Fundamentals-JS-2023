function biggestOfThreeNums(num1, num2, num3) {
    let array = [num1, num2, num3];
    let sorted = array.sort((a, b) => b - a);

    console.log(sorted[0]);
}
biggestOfThreeNums(-2,
    7,
    3);