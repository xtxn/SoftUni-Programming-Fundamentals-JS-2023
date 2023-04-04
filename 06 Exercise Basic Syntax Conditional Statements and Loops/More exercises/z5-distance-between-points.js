function distance(x1, y1, x2, y2) {
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    let dist = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    console.log(dist);
}
distance(2.34, 15.66, -13.55, -2.9985);