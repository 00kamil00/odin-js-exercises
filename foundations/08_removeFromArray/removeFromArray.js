const removeFromArray = function(array, ...args) {

  let new_array = []

  for (let i=0; i<array.length; i++) {
    if (!args.includes(array[i])) {
      new_array.push(array[i])
    }
  }
  return new_array
}

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray
