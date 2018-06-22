const uuid = require('uuid')
const uuidv4 = require('uuid/v4')


const generate = () => {
  let buffer = new Buffer(16)
  uuidv4(null, buffer, 0)

  return buf2str(buffer)
}

const buf2str = buffer => {
  return buffer
    .toString('base64')
    .substring(0, 22)    // remove '=='
    .replace(/\+/g, '_') // replace '+' with '_'
    .replace(/\//g, '-') // replace '/' with '-'
}

const str2buf = string => {
  let str = string.replace(/-/g, '/').replace(/_/g, '+') + '=='
  
  return new Buffer(str, 'base64')
}

// const fromUUID = value => {
//   let buffer = new Buffer(16)
//   uuid.parse(value, buffer)

//   return buf2str(buffer)
// }

// const toUUID = value => {
//   let buffer = str2buf(value)
//   return uuid.unparse(buffer)
// }


module.exports = generate