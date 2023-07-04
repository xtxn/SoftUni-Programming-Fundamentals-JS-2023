function loadingBar(num) {
    let percent = '%'
    let dots = '.'
    let percentCount = num / 10;
    let dotsCount = 10 - percentCount;
    if (num < 100) {
        console.log(`${num}% [${percent.repeat(percentCount)}${dots.repeat(dotsCount)}]`);
        console.log('Still loading...');
    } else {
        console.log(`${num}% Complete!`);
        console.log(`${percent.repeat(percentCount)}`);
    }
}
loadingBar(50
)