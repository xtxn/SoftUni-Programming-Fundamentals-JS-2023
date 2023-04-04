function nextDay(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    const nextYear = date.getFullYear();
    const nextMonth = date.getMonth() + 1;
    const nextDay = date.getDate();
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

nextDay(2016, 9, 30);

