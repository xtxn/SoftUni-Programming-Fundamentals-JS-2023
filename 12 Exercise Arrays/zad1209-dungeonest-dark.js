function dungeonestDark(array) {
    let health = 100;
    let coins = 0;
    let isDead = false;
    let arrayToString = array.toString();
    let roomCounter = 0;
    arrayToString = arrayToString.split('|');

    for (let i = 0; i < arrayToString.length; i++) {
        let split = arrayToString[i].split(' ');
        let room = split[0];
        let num = Number(split[1]);

        if (isDead === true) {
            break;
        }

        if (room === 'potion') {

            health += num; //90+30

            if (health >= 100) {
                console.log(`You healed for ${100 + num - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${num} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
            roomCounter++;
        } else if (room === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
            roomCounter++;
        } else {
            health -= num;

            if (health <= 0) {
                isDead = true;
                console.log(`You died! Killed by ${room}.`);
                roomCounter++;
            } else {
                console.log(`You slayed ${room}.`);
                roomCounter++;
            }
        }
    }
    if (isDead === true) {
        console.log(`Best room: ${roomCounter}`);
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])