let arr = [1, 2, 3, 4, 5]
function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
function forEach(item, index, arr) {
    console.log(item + 2)
}
forEachCustom(arr, forEach)