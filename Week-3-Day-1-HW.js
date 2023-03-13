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

//Problem 4

const arrayOfNums = [4, 6, 9, 2, 18, 5, 10]

let sumArray = function (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
console.log(sumArray(arrayOfNums))


//Problem 5 

const itsAnArray = [1, 3, 57, 9, 11]

function multiplyArray(array) {
    let multiplication = 1;
    for (let i = 0; i < array.length; i++) {
        multiplication *= array[i]
    }
    return multiplication
}

console.log(multiplyArray(itsAnArray))

//Problem 6
//Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

let numArgs = function () {
    return arguments.length
}
console.log(numArgs(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11))

//Problem 7

function reverseString(string) {
    let splitString = string.split('')
    let reverseString = splitString.reverse()
    let joinString = reverseString.join('')
    return joinString
}
console.log(reverseString('rockstar'))

//Problem 8

let longestStringInArray = function (array) {
    let longestString = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i]
        }
    }
    return longestString.length
}
console.log(longestStringInArray(['pizza', 'green', 'thisIsNotATest', 'HelloWorld']))

//Problem 9


function stringsLongerThan(array, num) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            newArray.push(array[i])
        }
    }
    return newArray
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
