function passValidator(string) {
    let digitCounter = 0;
    let checkLength = 6 <= string.length && string.length <= 10;
    let checkSymbols;
    let checkNum;
    let numCounter = 0;

    for (let i = 0; i < string.length; i++) {
        checkSymbols = (65 <= string.charCodeAt(i) && string.charCodeAt(i) <= 90) || (97 <= string.charCodeAt(i) && string.charCodeAt(i) <= 122) || (48 <= string.charCodeAt(i) && string.charCodeAt(i) <= 57);
        if (checkSymbols === false) {
            break;
        }
    }

    for (let i = 0; i < string.length; i++) {
        checkNum = (48 <= string.charCodeAt(i) && string.charCodeAt(i) <= 57);
        if (checkNum === true) {
            numCounter++
        }
    }

    if (checkLength === false) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (checkSymbols === false) {
        console.log('Password must consist only of letters and digits');
    }
    if (numCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (checkLength === true && checkSymbols === true && numCounter >= 2) {
        console.log('Password is valid');
    }
}
passValidator('My$Pa3');