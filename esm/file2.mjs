import a from './file1.mjs'
import {b as v} from './file3.mjs'
import add from './file4.mjs'

console.log(a)
console.log(v)
console.log(add(a,v))