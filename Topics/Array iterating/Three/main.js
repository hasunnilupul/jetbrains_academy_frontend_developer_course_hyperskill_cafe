function three(arr) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            index = i;
            break;
        }
    }
    return index;
}