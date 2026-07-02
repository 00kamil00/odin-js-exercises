const sumAll = function (numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0) {
        return "ERROR"
    }

    if (numOne > numTwo) {
        let temp = numOne
        numOne = numTwo
        numTwo = temp
    }

    let new_array = []
    for (let i=numOne; i<=numTwo; i++) {
        new_array.push(i)
    }

    let suma = 0
    new_array.forEach(number => {suma += number})

    return suma
}

// Do not edit below this line
module.exports = sumAll;
