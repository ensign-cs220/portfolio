function isPrime(n) {
    // check if the remainder is equal 0
    // eslint-disable-next-line no-plusplus
    for (let i = 2; i < Math.ceil(n / 2); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
