const totalIntegers = function(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return undefined
    }

    let count = 0
    for (const element of Object.values(obj)) {
        if (Number.isInteger(element)) {
            count ++
        }
        if (typeof element === 'object' && element !== null) {
            count += totalIntegers(element)
        }
    }
    return count
};

// Do not edit below this line
module.exports = totalIntegers;
