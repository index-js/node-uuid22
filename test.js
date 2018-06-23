const assert = require('assert')
const uuid22 = require('./index')

let id = uuid22.create()
console.log(id)

let uuid = uuid22.decode(id)
console.log(uuid)

assert(id, uuid22.encode(uuid), 'should equal')