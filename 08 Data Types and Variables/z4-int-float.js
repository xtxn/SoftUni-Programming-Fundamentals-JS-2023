function intOrFloat(first, second, third) {
    let sum = first + second + third;
    let type = Number.isInteger(sum) ? 'Integer' : 'Float';
    console.log(`${sum} - ${type}`);
}
intOrFloat(9, 100, 1.1);