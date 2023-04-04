function addAndSubstract(arr) {
    let num = 0;
    let newArray = [];
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 === 0) {
            num = arr[i] + i;
            newArray.push(num);
        }
        else {
            num = arr[i] - i;
            newArray.push(num);
        }
    }
    for (let num of arr) {
        oldSum += num;
    }
    for (let num of newArray) {
        newSum += num;
    }

    console.log(newArray);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);