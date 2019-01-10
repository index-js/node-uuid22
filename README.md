# uuid22
> A short, url friendly uuid module, contain: [A-Za-z0-9_-]


## Installation

Install via `npm`:

```
$ npm i uuid22
```


## Usage

Create a short uuid22
> const uuid22 = require('uuid22')
``` js
let id = uuid22.create()
// 3esn_9mgRiS_TUYVBi2u1A
// "id" length is 22
```
decode / encode
``` js
let uuid = uuid22.decode(id)
let orgin = uuid22.encode(uuid)
assert.equal(id, orgin, 'uuid22.encode() should equal orgin')
```

## API
``` js
// No more require uuid
uuid22 {
  create,
  encode,
  decode,
  uuidv1,
  uuidv4,
  uuidv5
}
```

## Authors

**Yanglin** ([i@yangl.in](mailto:mail@yanglin.me))


## License

Copyright (c) 2018 Yanglin

Released under the MIT license
