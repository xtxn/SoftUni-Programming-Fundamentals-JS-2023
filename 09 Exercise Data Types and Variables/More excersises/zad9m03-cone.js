function cone(radius, height) {
    let volume = 1 / 3 * (height * Math.PI * (radius ** 2));
    // let totalSurface = (Math.PI * radius * height) + (Math.PI * radius ** 2);
    let totalSurface = Math.PI * radius * (radius + Math.sqrt(radius ** 2 + height ** 2));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurface.toFixed(4)}`);
}
cone(3, 5);

