// ::Purpose
// This builds out common functions from scratch. 

let arrayString = [`dog`, `cat`, `lizard`]
let arrayDigit = [1, 3, 5]

// ::map

const myForEach = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}

arrayString.forEach(function(item, index) {
    console.log(index, item)
})

// myForEach([`a`, `b`, `c`], function(item, index, array) {
//     console.log(item, index, array)
// })

// ::forEach

// array.forEach((element, index, array) => {
//     console.log(`forEach 1: ${index + 1}: ${element}`)
// })

// const myForEach = function(array, callback) {
//     for (let i=0; i < array.length; i++) {
//         callback(array[i], i, array);
//         console.log(array, callback);
//     }
// }

// myForEach(array, callback)
