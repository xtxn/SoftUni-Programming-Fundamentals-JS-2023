function biggest(num1, num2, num3) {
    let array = [num1, num2, num3];
    let sortedNum = array.sort(function (a, b) { return a - b });
    console.log(sortedNum[2]);
}
biggest(
    130,
    5,
    99

)