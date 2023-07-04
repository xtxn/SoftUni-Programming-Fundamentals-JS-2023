function smallestOfThreeNums(num1, num2, num3) {
    let smallestNum = 0;
    let smallestOfTwo = (x, y) => {
        if (x < y) {
            smallestNum = x;
        } else {
            smallestNum = y;
        }
    }
    smallestOfTwo(num1, num2);
    smallestOfTwo(smallestNum, num3);
    console.log(smallestNum);
}
smallestOfThreeNums(600,
    342,
    123);