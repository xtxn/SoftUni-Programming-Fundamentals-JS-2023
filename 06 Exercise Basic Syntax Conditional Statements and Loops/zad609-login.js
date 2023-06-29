function login(array) {
    let user = array[0];
    let pass = (array[0]).split('').reverse().join('');
    let counter = 0;
    for (let i = 1; i < array.length; i++) {
        counter++;
        if (counter === 4 && array[i] !== pass) {
            console.log(`User ${user} blocked!`);
            break;
        }
        if (array[i] !== pass) {
            console.log('Incorrect password. Try again.')
        } else if (array[i] === pass) {
            console.log(`User ${user} logged in.`)
        }

    }
}
login(['Acer', 'login', 'go', 'let me in', 'recA'])