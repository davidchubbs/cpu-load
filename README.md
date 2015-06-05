# CPU Load

[![License](https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat)](https://tldrlegal.com/license/mit-license "MIT License")
 [![Dependency Status](https://david-dm.org/davidchubbs/cpu-load.svg?style=flat)](https://david-dm.org/davidchubbs/cpu-load)
[![NPM version](https://img.shields.io/npm/v/cpu-load.svg?style=flat)](https://npmjs.org/package/cpu-load)

No dependencies.

```js
let cpu = require('cpu-load')

// track the CPU load over the next 1 second
cpu(1000, function (load) {
  load //=> 0.03 (3%)
})
```

The CPU load is averaged across multi-core machines. No need to divide the cpu-load results against the number of cores.
