const assert = require('assert')
const uuid22 = require('./index')

let id = uuid22.create()
console.log(id)

let uuid = uuid22.decode(id)
console.log(uuid)

assert.equal(id, uuid22.encode(uuid), 'uuid22.encode() should equal orgin')

// No more require uuid
console.log(uuid22.uuid)