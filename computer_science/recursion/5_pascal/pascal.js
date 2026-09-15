const pascal = function(n) {
    if (n === 1) {
        return [1]
    }

    const prevRow = pascal(n - 1)
    const padded = [0, ...prevRow, 0]
    const newRow = []

    for (let i = 0; i < padded.length - 1; i++) {
        newRow.push(padded[i] + padded[i + 1])
    }
    return newRow
};

// Do not edit below this line
module.exports = pascal;
