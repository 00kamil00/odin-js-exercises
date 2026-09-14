const permutations = function(arr) {
    if (arr.length <= 1) {
        return [arr]
    }

    const result = []

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]

        const remaining = arr.slice(0, i).concat(arr.slice(i + 1))
        const remainingPerms = permutations(remaining)

        for (const perm of remainingPerms) {
            result.push([current, ...perm])
        }
    }
    return result
};

// Do not edit below this line
module.exports = permutations;
