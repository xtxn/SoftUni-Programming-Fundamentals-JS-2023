function rightPlace(string1, char, string2) {
    let check = string1.replace('_', char);
    console.log(check === string2 ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'I', 'Strong')