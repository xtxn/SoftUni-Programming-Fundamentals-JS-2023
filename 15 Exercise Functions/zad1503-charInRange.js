function charInRange(char1, char2) {
    let charNum1 = char1.charCodeAt();
    let charNum2 = char2.charCodeAt();
    let start = 0;
    let end = 0;
    let result = '';

    if (charNum1 > charNum2) {
        start = charNum2;
        end = charNum1;
    } else {
        start = charNum1;
        end = charNum2;
    }
    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + " ";
    }
    console.log(result);
}
charInRange('#', ':');    