const assert = require('assert')
const uuid22 = require('./index')

let id = uuid22.generate()
console.log(id)

let back = uuid22.to_uuid(id)
console.log(back)

assert(id, uuid22.from_uuid(back), 'should equal')