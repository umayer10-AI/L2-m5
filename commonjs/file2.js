// const value = require('./file1.js')
const {a : x, b : y} = require('./file1.js')
const add = require('./utils/add.js')

// console.log(value.b)
console.log(x,y)
console.log(add(x,y))