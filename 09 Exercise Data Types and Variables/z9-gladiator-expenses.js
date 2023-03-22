function gladiatorExpenses(lost, helmet, sword, shield, armor) {
    let expenses = 0;
    let shieldCounter = 0;
    for (let index = 1; index <= lost; index++) {
        if (index % 2 === 0) {
            expenses += helmet;
        }
        if (index % 3 === 0) {
            expenses += sword;
        }
        if (index % 2 === 0 && index % 3 === 0) {
            expenses += shield;
            shieldCounter++;
            if (shieldCounter % 2 === 0) {
                expenses += armor;
            }
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(
    23,
    12.50,
    21.50,
    40,
    200
)