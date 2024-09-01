var numbers = []; 
var n = 0;   
function FizzBuzz() {
    n ++;
    if (n % 3 === 0 && n % 5 === 0  ) {
        numbers.push("FizzBuzz");
    }
    else if (n % 5 === 0 ) {
        numbers.push("Buzz");

    }
    else if (n % 3 === 0) {
        numbers.push("Fizz");

    }
    else {
        numbers.push(n);
    }
    
    console.log(numbers);
}
FizzBuzz();