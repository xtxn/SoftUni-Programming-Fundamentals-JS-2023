function vacation(group, type, day) {
    let singlePrice = 0;
    let totalPrice = 0;
    switch (type) {
        case 'Students':
            if (day == 'Friday') {
                singlePrice = 8.45;
            } else if (day == 'Saturday') {
                singlePrice = 9.80;
            } else if (day == 'Sunday') {
                singlePrice = 10.46;
            }
            totalPrice = (group * singlePrice).toFixed(2);
            if (group >= 30) {
                totalPrice = (0.85 * totalPrice).toFixed(2)
            }
            break;

        case 'Business':
            if (day == 'Friday') {
                singlePrice = 10.90;
            } else if (day == 'Saturday') {
                singlePrice = 15.60;
            } else if (day == 'Sunday') {
                singlePrice = 16;
            }
            totalPrice = (group * singlePrice).toFixed(2);
            if (group >= 100) {
                let discount = singlePrice * 10;
                totalPrice = (totalPrice - discount).toFixed(2)
            }
            break;

        case 'Regular':
            if (day == 'Friday') {
                singlePrice = 15;
            } else if (day == 'Saturday') {
                singlePrice = 20;
            } else if (day == 'Sunday') {
                singlePrice = 22.50;
            }
            totalPrice = (group * singlePrice).toFixed(2);
            if (10 <= group && group <= 20) {
                totalPrice = (0.95 * totalPrice).toFixed(2)
            }
            break;

    } console.log(`Total price: ${totalPrice}`);
}
vacation(
    40,
    "Regular",
    "Saturday"

)