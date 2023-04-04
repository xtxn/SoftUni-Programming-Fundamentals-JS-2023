function cone(radius, height) {
    const volume = (1 / 3) * Math.PI * (radius ** 2) * height;
    const area = Math.PI * radius * (radius + Math.sqrt((radius ** 2) + (height ** 2)));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
cone(
    3,
    5
);
// V = (1/3)πr2h