function centuriesToMin(century) {
    let toYears = century * 100;
    let toDays = Math.trunc(toYears * 365.2422);
    let toHours = toDays * 24;
    let toMin = toHours * 60;
    console.log(`${century} centuries = ${toYears} years = ${toDays} days = ${toHours} hours = ${toMin} minutes`);
}
centuriesToMin(1);