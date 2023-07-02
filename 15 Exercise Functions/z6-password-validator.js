function passwordValidator(pass) {
    let numberCounter = 0;
    let isValid = true;

    if (pass.length < 6 || pass.length > 10) {
        isValid = false;
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (containsSpecialChar(pass) === true) {
        isValid = false;
        console.log(`Password must consist only of letters and digits`);
    }
    if (numCount(pass) < 2) {
        isValid = false;
        console.log(`Password must have at least 2 digits`);
    }

    if (isValid) {
        console.log('Password is valid');
    }

    function numCount(num) {
        let numbers = '1234567890';
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (Number(num[i]) === Number(numbers[j])) {
                    numberCounter++
                }
            }
        }
        return numberCounter;
    }

    function containsSpecialChar(str) {
        let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChar.test(str);
    }
}

passwordValidator('logIn');