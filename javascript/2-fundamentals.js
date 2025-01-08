//// Sigma function
function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}
sigma(10); // returns 55

// Factorial function
function factorial(num) {
    var product = 1;
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    console.log(product);
}
factorial(5); // returns 120

// Fibonacci function
function fibonacci(num) {
    var fib = [0, 1];
    for (var i = 2; i < num; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    console.log(fib);
}
fibonacci(10); // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Star art function
class starArt{
    drawStars() { // draw 50 stars  in a row
        var stars = '';
        for (var i = 0; i < 50; i++) {
            stars += '*';
        }
        console.log(stars);
    }
    drawLeftStars(num) {
        var stars = '';
        for (var i = 0; i < num; i++) {
            stars += '*';
        }
        console.log(stars);
    }
    drawRightStars(num) {
        var stars = '';
        for (var i = 0; i < 50 - num; i++) {
            stars += ' ';
        }
        for (var i = 0; i < num; i++) {
            stars += '*';
        }
        console.log(stars);
    }
    drawCenteredStars(num) {
        var stars = '';
        for (var i = 0; i < (50 - num) / 2; i++) {
            stars += ' ';
        }
        for (var i = 0; i < num; i++) {
            stars += '*';
        }
        console.log(stars);
    }
}
var star = new starArt();
star.drawStars();
star.drawRightStars(5);
star.drawLeftStars(5);
star.drawCenteredStars(5); 