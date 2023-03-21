function spiceMustFlow(num) {
    let totalAmount = 0;
    let startingYield = num;
    let crewConsumation = 26;
    let daysCounter = 0;
    while (startingYield >= 100) {
        totalAmount = totalAmount + startingYield - crewConsumation;
        startingYield -= 10;
        daysCounter++;
    }
    if (totalAmount >= crewConsumation) {
        totalAmount -= crewConsumation;
    }
    console.log(daysCounter);
    console.log(totalAmount);
}
spiceMustFlow(
    450
)