let arr = [5, 4, 3, 2, 1, 0]

// function binarySearch(arr, value, left = 0, right = arr.length-1){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]===value){
//         return mid
//     }else if(arr[mid]<value){
//         return binarySearch(arr, value, left+1, right)
//     }else{
//         return binarySearch(arr, value, left, right-1)
//     }
// }

// console.log(binarySearch([1,2,3,4,5,6], 1));


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp 
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }



// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         j = i - 1
//         while (j >= 0 && arr[j] > temp) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));


// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (i = 0; i < arr.length; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }



// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));

// function bubbleSort(arr){
//    let swapped 
//    do {
//     swapped = false
//     for(i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             let temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//             swapped = true
//         }
//     }
//    } while (swapped);
//     return arr
// }
// console.log(bubbleSort(arr));


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));



// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped);
//     return arr
// }


// console.log(bubbleSort(arr));


// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }

// console.log(insertionSort(arr));


// function insertionSort(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i - 1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = temp
//     }
//     return arr
// }


// console.log(insertionSort([10,2,33,54,23,65,43,24]));




class Node {
    constructor(value){
        this.data = value
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const newNode = new Node(value)
        if(this.size===0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.size++
    }

    pop(){
        if(this.size === 0){
            return "Stack Underflow"
        }else{
            this.top = this.top.next
            this.size--
        }
    }

    print(){
        if(this.size === 0){
            return "Stack Underflow"
        }else{
            let curr = this.top
            let elements = ""
            while(curr!==null){
                elements+=curr.data+" "
                curr=curr.next
            }
            return elements
        }
    }
}

const stack = new Stack()
// console.log(stack.pop());
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.print());
stack.pop()

console.log(stack.print());