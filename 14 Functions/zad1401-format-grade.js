function formatGrade(grade) {
    let output = function log(output) {
        if (grade < 3) {
            console.log(`${output} (${Math.floor(grade)})`);
        } else {
            console.log(`${output} (${grade.toFixed(2)})`);
        }
    }
    if (grade < 3) {
        output('Fail');
    } else if (grade < 3.50) {
        output('Poor');
    } else if (grade < 4.50) {
        output('Good');
    } else if (grade < 5.50) {
        output('Very good');
    } else {
        output('Excellent');
    }
}
formatGrade(2.33)