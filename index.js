const uuid = require('uuid')
const uuidv4 = require('uuid/v1')
const uuid_parse = require('uuid-parse')


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

const from_uuid = value => {
  let buffer = new Buffer(16)
  uuid_parse.parse(value, buffer)

  return buf2str(buffer)
}

const to_uuid = string => {
  let buffer = str2buf(string)
  return uuid_parse.unparse(buffer)
}


module.exports = {
  generate,
  from_uuid,
  to_uuid
}