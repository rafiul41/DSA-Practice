function func(str) {
    let numbers = str.split(/[A-Za-z]+/);
    console.log(numbers);
    numbers = numbers.filter(number => number !== '').map(number => parseInt(number));
    return numbers.reduce((prevAccumulated, curr) => prevAccumulated + curr, 0);
}

console.log(func('aasdfsdfb12csdffd34dasdf'));