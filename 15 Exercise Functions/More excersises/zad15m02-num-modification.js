function numModification(num) {
    let sum = 0;
    let numAsString = num.toString();

    while ((sum / numAsString.length) < 5) {
        sum = 0;

        for (let i = 0; i < numAsString.length; i++) {
            sum += Number(numAsString[i]);
        }

        if ((sum / numAsString.length) < 5) {
            numAsString += '9';
        } else {
            console.log(numAsString);
        }
    }
}
numModification(5835);