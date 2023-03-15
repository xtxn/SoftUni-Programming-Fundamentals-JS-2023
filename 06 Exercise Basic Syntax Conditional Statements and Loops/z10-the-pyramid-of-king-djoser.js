function kingDjoser(base, increment) {
    let row = 0;
    let rowHeight = 0;

    let stoneCount = 0;
    let marbleCount = 0;
    let lapisLazuliCount = 0;
    let goldCount = 0;

    for (let i = base; i > 0; i -= 2) {
        row++;
        rowHeight += increment;
        let totalArea = i ** 2;
        let innerArea = (i - 2) ** 2;

        if (row >= base / 2) {
            goldCount = i ** 2;
        } else if (row % 5 === 0) {
            lapisLazuliCount += totalArea - innerArea;
            stoneCount += innerArea;
        } else {
            stoneCount += innerArea;
            marbleCount += totalArea - innerArea;
        }
    }
    console.log(`Stone required: ${Math.ceil(stoneCount * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleCount * increment)} `);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliCount * increment)} `);
    console.log(`Gold required: ${Math.ceil(goldCount * increment)} `);
    console.log(`Final pyramid height: ${Math.floor(rowHeight)} `);
}
kingDjoser(11, 1);