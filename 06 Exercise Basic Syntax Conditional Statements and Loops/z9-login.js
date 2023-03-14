function login(input) {
    index = 0;
    let username = input[index];
    let password = input[index].split('').reverse().join('');
    index++;
    let counter = 0;

    for (let i = 0; i < input.length - 1; i++) {

        let passwordTest = input[index];
        index++

        if (passwordTest !== password) {

            if (counter == 3) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
            counter++;

        } else if (passwordTest === password) {
            console.log(`User ${username} logged in.`);
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);