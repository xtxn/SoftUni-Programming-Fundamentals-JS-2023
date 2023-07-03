function ladyBugs(array) {
    let field = [];

    for (let i = 0; i < Number(array[0]); i++) {
        field.push(0);
    }

    let bugsInitialPositions = array[1].split(' ');

    for (let i = 0; i < bugsInitialPositions.length; i++) {
        let index = bugsInitialPositions[i]
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < array.length; i++) {
        let command = array[i].split(' ');
        let flyFrom = Number(command[0]);
        let flyDirection = command[1];
        let flyLength = Number(command[2]);

        if (flyFrom >= field.length || flyFrom < 0 || field[flyFrom] == 0) {
            continue;
        }

        field[flyFrom] = 0;
        let isFly = true;
        // Shorter Method
        while (isFly) {
            let currentIndex = flyDirection === 'right' ? flyFrom + flyLength : flyFrom - flyLength;
            if (field[currentIndex] === 0) {
                field[currentIndex] = 1;
                isFly = false;
            } else if (field[currentIndex] === 1) {
                flyLength += flyLength;
            } else {
                isFly = false;
            }
        }
    }
    console.log(field.join(' '));
}

ladyBugs(
    [5, '3 1',
        '3 left 2',
        '1 left -2']
)
// Longer Method
/*
while (isFly) {
if (flyDirection === 'right') {
if (field[flyFrom + flyLength] === 0) {
field[flyFrom + flyLength] = 1;
isFly = false;
} else if (field[flyFrom + flyLength] === 1) {
flyLength += flyLength;
} else {
isFly = false;
}

} else {
if (field[flyFrom - flyLength] === 0) {
field[flyFrom - flyLength] = 1;
isFly = false;
} else if (field[flyFrom - flyLength] === 1) {
flyLength += flyLength;
} else {
isFly = false;
}
}
}
}
*/




