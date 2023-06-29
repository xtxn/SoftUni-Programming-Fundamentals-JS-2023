function bitcoinMining(array) {
    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;
    let dayCounter = 0;
    let bitcoinCounter = 0;
    let bitcoin = 0;
    let totalMoney = 0;
    let firstBitcoinDay = 0;

    for (i = 0; i < array.length; i++) {
        dayCounter++;
        let moneyPerDay = Number(array[i]) * goldPricePerGram;
        if (dayCounter % 3 === 0) {
            moneyPerDay *= 0.70;
        }
        totalMoney += moneyPerDay;
        if (totalMoney >= bitcoinPrice) {
            bitcoin = Math.trunc(totalMoney / bitcoinPrice);
            bitcoinCounter++;
            if (bitcoinCounter === 1) {
                firstBitcoinDay = dayCounter;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (bitcoinCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${(totalMoney - bitcoin * bitcoinPrice).toFixed(2)} lv.`);
}
bitcoinMining([3124.15,
    504.212,
    2511.124])