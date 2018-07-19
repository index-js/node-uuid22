# uuid22
> A short, url friendly uuid module, contain: [A-Za-z0-9_-]


## Installation

Install via `npm`:

```
$ npm i uuid22
```


## Usage

Create a short uuid22
``` js
var uuid22 = require('uuid22');
let id = uuid22.create()
// "id" length is 22
```
decode / encode
``` js
let uuid = uuid22.decode(id)
// console.log(uuid)

assert.equal(id, uuid22.encode(uuid), 'uuid22.encode() should equal orgin')
```


## Authors

**Yanglin** ([i@yangl.in](mailto:mail@yanglin.me))


## License

Copyright (c) 2018 Yanglin

Released under the MIT license
