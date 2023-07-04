function printDna(dnaLength) {
    let sequence = 'ATCGTTAGGG'
    let seqArray = sequence.split('');
    let counter = 0;

    for (let i = 0; i < dnaLength; i++) {
        let x = seqArray[0];
        let y = seqArray[1];
        counter++;
        switch (counter) {
            case 1: console.log(`**${x}${y}**`); break;
            case 2: console.log(`*${x}--${y}*`); break;
            case 3: console.log(`${x}----${y}`); break;
            case 4: console.log(`*${x}--${y}*`); break;
        }
        for (let i = 0; i < 2; i++) {
            let moveFirstToBack = seqArray.shift();
            seqArray.push(moveFirstToBack);
        }
        if (counter >= 4) {
            counter = 0;
        }
    }
}
printDna(10);