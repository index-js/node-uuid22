const assert = require('assert')
const uuid22 = require('./index')

let id = uuid22.create()
// 3esn_9mgRiS_TUYVBi2u1A
// "id" length is 22

let uuid = uuid22.decode(id)
let orgin = uuid22.encode(uuid)
assert.equal(id, orgin, 'uuid22.encode() should equal orgin')

// No more require uuid
console.log(uuid22.uuidv1)
