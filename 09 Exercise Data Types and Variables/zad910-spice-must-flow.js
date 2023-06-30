function spiceMustFlow(num) {
    let totalYield = 0;
    let daysCounter = 0;
    let crewConsumation = 26;

    while (num >= 100) {
        totalYield += num;
        num -= 10;
        totalYield -= crewConsumation;
        daysCounter++;
    }
    if (totalYield >= crewConsumation) {
        totalYield -= crewConsumation;
    }
    console.log(daysCounter);
    console.log(totalYield);
}
spiceMustFlow(111)