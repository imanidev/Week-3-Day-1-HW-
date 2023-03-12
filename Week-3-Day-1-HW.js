// 1.

let maxOfTwoNumbers = function (num1, num2) {
    if (num1 >= num2) {
        return num1
    } else {
        return num2
    }
}
// ternary expression
// let maxOfTwoNumbers = (num1, num2) => num1 >= num2 ? num1 : num2

console.log(maxOfTwoNumbers(3, 10))

//2.

let maxOfThree = function (num1, num2, num3) {
    if (num1 > num2 && num3) {
        return num1
    }
    else if (num2 > num1 && num3) {
        return num2
    } else {
        return num3
    }
}

// ternary expression
// let maxOfThree = (num1, num2, num3) => num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num2 > num3 ? num2 : num3;
console.log(maxOfThree(2, 56, 12))
maxOfThree()