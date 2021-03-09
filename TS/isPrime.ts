function isPrime(num: number): boolean {
    if (num == 1)
        return false
    else if (num > 1 && num <= 3)
        return true
    const largestNumToCheck = Math.floor(Math.sqrt(num));
    for (var i = 0;i < largestNumToCheck;i++) 
        if (num % i == 0)
            return false;
    return true;
}

var num = 4012931;
console.log(`Is ${num} a prime number? ${isPrime(num) ? "yes" : "no"}`);