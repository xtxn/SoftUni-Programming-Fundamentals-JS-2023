function repeatString(string, n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        output += string;
    }
    console.log(output);
}
repeatString("String", 2);