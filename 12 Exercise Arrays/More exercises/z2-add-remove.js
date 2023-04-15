function addAndRemove(array) {
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        switch (array[index]) {
            case 'add': newArray.push(index + 1);
                break;
            case 'remove': newArray.splice(-1);
                break;
        }
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}
addAndRemove(
    ['remove', 'remove', 'remove']
)