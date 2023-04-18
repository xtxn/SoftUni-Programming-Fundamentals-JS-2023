function palindromeInt(array) {
    let isPalindrome = false;
    for (let i = 0; i < array.length; i++) {
        let arrayToString = array[i].toString();
        let reversed = arrayToString.split('').reverse().join('');
        if (array[i] == reversed) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        console.log(isPalindrome);
    }
}
palindromeInt([32, 2, 232, 1010]);