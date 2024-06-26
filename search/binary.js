let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let target = 6

function binarySearch(arr, data) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] === data) {
            return mid
        } else if (arr[mid] < data) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

function binarySearchRecursive(arr, data, left = 0, right = arr.length - 1){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)
    if(arr[mid]===data){
        return mid
    }else if(arr[mid]<data){
        return binarySearchRecursive(arr, data, mid + 1, right)
    }else{
        return binarySearchRecursive(arr, data, left, right - 1)
    }
}

// console.log(binarySearch(arr, target));
// console.log(binarySearchRecursive(arr, target));