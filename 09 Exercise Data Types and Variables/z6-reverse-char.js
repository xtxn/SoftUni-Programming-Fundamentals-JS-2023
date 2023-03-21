function reverseChar(x, y, z) {
    let input = (x + ' ' + y + ' ' + z);
    let reverse = input.split('').reverse().join('');
    console.log(reverse);
}
reverseChar(
    '1',
    'L',
    '&'

);