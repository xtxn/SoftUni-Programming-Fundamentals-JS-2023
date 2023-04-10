function dungeon(array) {
    let health = 100;
    let coins = 0;
    let arrAsString = array.toString();
    let splittedArray = arrAsString.split(/[' ',|]/);
    let roomCounter = 0;

    for (let i = 0; i < splittedArray.length - 1; i = i + 2) {
        roomCounter++;
        switch (splittedArray[i]) {
            case 'potion':
                let healedFor = Number(splittedArray[i + 1])
                if (health + healedFor > 100) {
                    healedFor = 100 - health;
                    health = 100;
                } else {
                    health += healedFor;
                }
                console.log(`You healed for ${healedFor} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                let recievedCoins = Number(splittedArray[i + 1]);
                coins += recievedCoins
                console.log(`You found ${recievedCoins} coins.`);
                break;
            default:
                let lostHealth = Number(splittedArray[i + 1]);
                let monster = splittedArray[i];
                health -= lostHealth;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
                break;
        }
    }
    console.log('You\'ve made it!');
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeon(
    ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]
)