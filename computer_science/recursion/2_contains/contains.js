const contains = function(obj, searchValue) {
    for (const val of Object.values(obj)) {
        if (Object.is(val, searchValue)) return true

        if (typeof val === 'object' && val !== null) {
            if (contains(val, searchValue)) return true
        }
    }
    return false
};

// Do not edit below this line
module.exports = contains;
