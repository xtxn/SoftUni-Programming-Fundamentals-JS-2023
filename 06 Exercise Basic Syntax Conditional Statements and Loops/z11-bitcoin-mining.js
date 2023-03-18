function bitcoinMining(array) {
    let bitcoinPrise = 11949.16;
    let bitcoinCount = 0;
    let collectedGold = 0;
    let dayCounter = 0;
    let firstBitcoinDay = 0;

    for (let index = 0; index < array.length; index++) {
        dayCounter++;

        let dayGoldInGr = array[index];

        if (dayCounter % 3 === 0) {
            dayGoldInGr *= 0.70;
        }

        collectedGold += dayGoldInGr * 67.51;

        while (collectedGold >= bitcoinPrise) {
            bitcoinCount++;
            collectedGold -= bitcoinPrise;
            if (bitcoinCount === 1) {
                firstBitcoinDay = dayCounter;
            }

        }

    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${collectedGold.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124]);