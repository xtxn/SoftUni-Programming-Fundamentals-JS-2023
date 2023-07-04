function palindrome(array) {
    let isPalindrome = false;
    let reversedNum = x => x.toString().split('').reverse().join('')

    for (let i = 0; i < array.length; i++) {
        if (array[i] == reversedNum(array[i])) {
            isPalindrome = true;
        } else {
            isPalindrome = false;
        }
        console.log(isPalindrome);
    }
}
palindrome([32, 2, 232, 1010]);