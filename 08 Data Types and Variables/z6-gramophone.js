function gramophone(band, album, song) {
    let songLength = (album.length * band.length) * song.length / 2;
    let rotateCount = Math.ceil(songLength / 2.5);
    console.log(`The plate was rotated ${rotateCount} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');