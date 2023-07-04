function addSubtract(num1, num2, num3) {
    let sum = (x, y) => x + y;
    let subtract = (w, z) => w - z;
    let result = subtract(sum(num1, num2), num3);
    console.log(result);
}
addSubtract(23, 6, 10)