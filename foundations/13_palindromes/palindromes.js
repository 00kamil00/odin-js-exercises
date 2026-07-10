const palindromes = function (text) {
    const smallletters = text.toLowerCase()
    const cleartext = smallletters.replace(/[,\s\W_]+/g, "")

    const arr = cleartext.split('')
    const arr_reverse = arr.reverse()

    const result = arr_reverse.join('')

    if (cleartext === result) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
