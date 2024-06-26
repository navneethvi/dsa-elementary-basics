function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

let arr = [3, 2, 5, 6, 1, 9, 7]

console.log(selectionSort(arr));