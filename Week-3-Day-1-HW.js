// 1.

let maxOfTwoNumbers = function (num1, num2) {
    if (num1 >= num2) {
        return num1
    } else {
        return num2
    }
}
// ternanry expression
// let maxOfTwoNumbers = (num1, num2) => num1 >= num2 ? num1 : num2

console.log(maxOfTwoNumbers(3, 10))

//2.
//Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.