function reuqiredReading(pagesCount, pagesPerHour, daysLimit) {
    let hoursNeeded = pagesCount / pagesPerHour;
    let hoursPerDay = hoursNeeded / daysLimit;
    console.log(hoursPerDay);
}
reuqiredReading(432, 15, 4);