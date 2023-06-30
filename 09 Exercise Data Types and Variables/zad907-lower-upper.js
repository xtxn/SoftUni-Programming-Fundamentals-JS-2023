function lowerOrUpper(char) {
    let charNum = char.charCodeAt(0);
    if (65 <= charNum && charNum <= 90) {
        console.log('upper-case');
    } else if (97 <= charNum && charNum <= 122) {
        console.log('lower-case');
    }
}
lowerOrUpper('Z')