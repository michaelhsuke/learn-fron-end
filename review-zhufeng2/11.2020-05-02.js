var result = []

function Fibonacci(n)
{
    if (result[n]) {
        return result[n]
    }
    
    if (n == 0) {
        result[0] = 0
        return 0
    }
    if (n == 1) {
        result[1] = 1
        return 1
    }
    
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(20))