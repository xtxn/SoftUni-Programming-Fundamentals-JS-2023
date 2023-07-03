function tseamAccount(array) {

    let currentGames = array[0].split(' ');

    for (let i = 1; i < array.length; i++) {

        let current = array[i].split(' ');
        let command = current[0];
        let game = current[1];

        switch (command) {
            case 'Install':
                if (!currentGames.includes(game)) {
                    currentGames.push(game);
                }
                break;

            case 'Uninstall':
                if (currentGames.includes(game)) {
                    let index = currentGames.indexOf(game);
                    currentGames.splice(index, 1);
                }
                break;

            case 'Update':
                if (currentGames.includes(game)) {
                    let index = currentGames.indexOf(game);
                    currentGames.splice(index, 1);
                    currentGames.push(game);
                }
                break;

            case 'Expansion':
                let expansion = game.split('-');
                if (currentGames.includes(expansion[0])) {
                    let index = currentGames.indexOf(expansion[0]);
                    expansion = `${expansion[0]}:${expansion[1]}`;
                    currentGames.splice(index + 1, 0, expansion);
                }
                break;
        }
    }
    console.log(currentGames.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'])