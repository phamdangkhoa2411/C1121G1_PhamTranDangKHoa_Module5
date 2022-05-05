function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
let sum = 0;
let i;
let j = 10;
for (i = 0; i < j; i++) {
    sum += fibonacci(i);
    console.log(fibonacci(i));
}
console.log(sum);
//# sourceMappingURL=main.js.map