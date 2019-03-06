const uuidv1 = require('uuid/v1')
const uuidv4 = require('uuid/v4')
const uuidv5 = require('uuid/v5')
const uuid_parse = require('uuid-parse')


const create = () => {
  let buffer = Buffer.alloc(16)
  uuidv1(null, buffer)

  return buf2str(buffer)
}

const buf2str = buffer => {
  return buffer
    .toString('base64')  // Same as Base64 URL in Java
    .replace(/\+/g, '-') // replace '+' with '-'
    .replace(/\//g, '_') // replace '/' with '_'
    .substring(0, 22)    // remove '=='
}

const str2buf = string => {
  let str = string.replace(/-/g, '+').replace(/_/g, '/') + '=='
  
  return Buffer.from(str, 'base64')
}

const encode = value => {
  let buffer = Buffer.alloc(16)
  uuid_parse.parse(value, buffer)

  return buf2str(buffer)
}

const decode = string => {
  let buffer = str2buf(string)
  return uuid_parse.unparse(buffer)
}


module.exports = {
  create,
  encode,
  decode,
  uuidv1,
  uuidv4,
  uuidv5
}
