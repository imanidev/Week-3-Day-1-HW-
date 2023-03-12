// Problem 1

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

//Problem 2

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


//Problem 3 

//method 1
function isCharAVowel(char) {
    char = char.toLowerCase()
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
        return true
    } else {
        return false
    }
}

//method 2
const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

function isCharAVowel(char) {
    char = char.toLowerCase()
    for (let i = 0; i < vowels.length; i++) {
        if (vowels.includes(char)) {
            return `Hooray! ${char} is a vowel!`
        } else {
            return `Bummer dude, ${char} is not a vowel.`
        }
    }
}
console.log(isCharAVowel('a'))