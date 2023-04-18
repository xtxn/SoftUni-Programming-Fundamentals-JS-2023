function charInRange(char1, char2) {
    charInRangeArray = [];
    let startPosition = 0;
    let endPosition = 0;
    if (char1.charCodeAt() > char2.charCodeAt()) {
        startPosition = char2.charCodeAt();
        endPosition = char1.charCodeAt();
    } else {
        startPosition = char1.charCodeAt();
        endPosition = char2.charCodeAt();
    }
    for (let i = startPosition + 1; i < endPosition; i++) {
        charInRangeArray.push(String.fromCharCode(i));
    }
    console.log(charInRangeArray.join(' '));
}
charInRange(
    '#',
    ':'
)