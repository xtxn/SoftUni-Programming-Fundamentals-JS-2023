function vacation(count, type, day) {
    let pricePerPerson = 0;
    let totalPrice = 0;
    if (type === 'Students') {
        switch (day) {
            case 'Friday': pricePerPerson = 8.45;
                break;
            case 'Saturday': pricePerPerson = 9.80;
                break;
            case 'Sunday': pricePerPerson = 10.46;
                break;
        }
    }
    if (type === 'Business') {
        switch (day) {
            case 'Friday': pricePerPerson = 10.90;
                break;
            case 'Saturday': pricePerPerson = 15.60;
                break;
            case 'Sunday': pricePerPerson = 16;
                break;
        }
    }
    if (type === 'Regular') {
        switch (day) {
            case 'Friday': pricePerPerson = 15;
                break;
            case 'Saturday': pricePerPerson = 20;
                break;
            case 'Sunday': pricePerPerson = 22.50;
                break;
        }
    }
    totalPrice = count * pricePerPerson;
    if (type === 'Students' && count >= 30) {
        totalPrice *= 0.85;
    } else if (type === 'Business' && count >= 100) {
        totalPrice = (count - 10) * pricePerPerson;
    } else if (type === 'Regular' && count >= 10 && count <= 20) {
        totalPrice *= 0.95;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday");