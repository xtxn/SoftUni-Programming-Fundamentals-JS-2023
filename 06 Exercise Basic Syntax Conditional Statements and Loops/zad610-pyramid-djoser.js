function pyramidDjoser(base, increment) {
    let stoneCount = 0;
    let marbleCount = 0;
    let lapisLazuliCount = 0;
    let goldCount = 0;
    let rowCounter = 1;
    for (let i = base; i > 0; i -= 2) {
        if (i <= 2) {
            goldCount += i * i * increment;
            break;
        } else if (rowCounter % 5 === 0) {
            stoneCount += (i - 2) ** 2 * increment;
            lapisLazuliCount += ((i ** 2) - (i - 2) ** 2) * increment;
        } else {
            stoneCount += (i - 2) ** 2 * increment;
            marbleCount += ((i * i) - (i - 2) * (i - 2)) * increment;
        }
        rowCounter++;
    }
    console.log(`Stone required: ${Math.ceil(stoneCount)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount)}`);
    console.log(`Gold required: ${Math.ceil(goldCount)}`);
    console.log(`Final pyramid height: ${Math.floor(rowCounter * increment)}`);
}
pyramidDjoser(23, 0.5)