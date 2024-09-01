function fibonaciGenerator(n) {
    var result = []
    for (var i = 0; i < n ; i++) {
        if (i == 0) {
            result.push(0)
        }
        else if (i ===1) {
            result.push(1)
        }
        else {
            result.push(result[i-1]+result[i-2])
        }
    }
    return result
}

console.log(fibonaciGenerator(0));
console.log(fibonaciGenerator(1));
console.log(fibonaciGenerator(2));
console.log(fibonaciGenerator(3));
console.log(fibonaciGenerator(5));
console.log(fibonaciGenerator(10));
console.log(fibonaciGenerator(50));

