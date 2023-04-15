function repeatString(string, n) {
    buff = '';
    for (let i = 0; i < n; i++) {
        buff += string;
    }
    console.log(buff);
}
repeatString(
    "String", 2
)