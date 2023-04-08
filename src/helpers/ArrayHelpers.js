export function toggleStringInArray(array, string) {
    const index = array.indexOf(string);
    if(index === -1) {
        array.push(string);
    } else {
        array.splice(index, 1);
    }
    return array;
}

export function removeStringFromArray(array, string) {
    const index = array.indexOf(string);
    if(index > -1) {
        array.splice(index, 1);
    }
    return array;
}

export function addStringToArray(array, string) {
    array.push(string);
    return [...new Set(array)];
}
