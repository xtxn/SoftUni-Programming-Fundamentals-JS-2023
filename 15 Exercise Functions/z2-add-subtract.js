function addAndSubtract(num1, num2, num3) {
    let sum = function (a, b) {
        return a + b;
    }

    let subtract = function (c, d) {
        return c - d;
    }
    console.log(subtract(sum(num1, num2), num3));
}
addAndSubtract(
    1,
    17,
    30

)