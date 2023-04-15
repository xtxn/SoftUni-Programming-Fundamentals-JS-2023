function tseamAccount(array) {

    let initialGames = array[0].split(' ');
    let newArray = initialGames;

    for (let i = 1; i < array.length; i++) {

        command = array[i].split(' ');

        let installUninstall = command[0];
        let game = command[1];

        if (installUninstall === 'Install') {
            if (!(newArray.includes(game))) {
                newArray.push(game);
            }
        } else if (installUninstall === 'Uninstall') {
            if (newArray.includes(game)) {
                newArray = newArray.filter(e => e != game);
            }
        } else if (installUninstall === 'Update') {
            if (newArray.includes(game)) {
                newArray = newArray.filter(e => e != game);
                newArray.push(game);
            }
        } else if (installUninstall === 'Expansion') {
            game = game.split('-');
            if (newArray.includes(game[0])) {
                let expansion = (game[0] + ':' + game[1]);
                let index = initialGames.indexOf(game[0]);
                newArray.splice(index + 1, 0, expansion)
            }
        }
    }


    console.log(newArray.join(' '));
}
tseamAccount(
    ['CS WoW Diablo',
        'Uninstall XCOM',
        'Update PeshoGame',
        'Update WoW',
        'Expansion Civ-V',
        'Play!']

)