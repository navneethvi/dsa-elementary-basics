function countdown(n) {
    console.log(n)
    if (n <= 1) {
        return
    } else {
        countdown(n - 1)
    }
}

// countdown(10)

function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

function logs(n) {
    for (let i = 0; i <= n; i++) {
        console.log(fibonacci(i))
    }
}

// logs(8)


function factorial(n) {
    if (n < 2) {
        return 1
    }else{
        return n * factorial(n-1)
    }
}
console.log(factorial(5))