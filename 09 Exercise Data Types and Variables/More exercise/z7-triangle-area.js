function triangleArea(x, y, z) {
    const semiPerimeter = (x + y + z) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - x) * (semiPerimeter - y) * (semiPerimeter - z));
    console.log(area);
}
triangleArea(
    3,
    5.5,
    4

)