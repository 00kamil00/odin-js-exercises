const fibonacci = function(number) {
let num = number * 1

if (num < 0) {
    return "OOPS"
} else if (num === 0 ) {
    return 0
}
    let arr = [1, 1]
    for (let i = 2; i < num; i++) {
        let new_number = arr[i-1] + arr[i-2]
        arr.push(new_number)
    }
    return arr.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
