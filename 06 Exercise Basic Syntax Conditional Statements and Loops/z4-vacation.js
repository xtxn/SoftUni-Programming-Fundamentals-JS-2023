function vacation(group, type, day) {
    let totalPrice = 0;
    switch (type) {
        case 'Students':
            if (day == 'Friday') {
                totalPrice = group * 8.45;
            } else if (day == 'Saturday') {
                totalPrice = group * 9.80;
            } else if (day == 'Sunday') {
                totalPrice = group * 10.46;
            }

            if (group >= 30) {
                totalPrice = 0.85 * totalPrice;
            }
            break;

        case 'Business':
            if (group >= 100) {
                group -= 10;
            }

            if (day == 'Friday') {
                totalPrice = group * 10.90;
            } else if (day == 'Saturday') {
                totalPrice = group * 15.60;
            } else if (day == 'Sunday') {
                totalPrice = group * 16;
            }
            break;

        case 'Regular':
            if (day == 'Friday') {
                totalPrice = group * 15;
            } else if (day == 'Saturday') {
                totalPrice = group * 20;
            } else if (day == 'Sunday') {
                totalPrice = group * 22.50;
            }
            if (10 <= group && group <= 20) {
                totalPrice = 0.95 * totalPrice;
            }
            break;

    } console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(
    40,
    "Regular",
    "Saturday"
)