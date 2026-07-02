const reverseString = function(string) {
    let split_string = string.split("")
    let reverse_string = split_string.reverse()
    let join_string = reverse_string.join("")

    return join_string
};


reverseString('hello there')

// Do not edit below this line
module.exports = reverseString;
