for (let i = 1; i <= 100; i++) {
    const isFizz = i % 3 === 0;
    const isBuzz = i % 5 === 0;
    const isFizzBuzz = isFizz && isBuzz;
    let message = '';
    if (isFizzBuzz) {
        message = 'FizzBuzz';
    } else if (isBuzz) {
        message = 'Buzz';
    } else if (isFizz) {
        message = 'Fizz';
    }
    console.log(i, message);
}
