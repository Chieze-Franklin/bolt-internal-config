# bolt-internal-config

Internal Bolt module used to get the current configuration under which Bolt is running.

## Installation

```sh
$ npm install bolt-internal-config
```

## Use

```js
var config  = require('bolt-internal-config')

var port_bolt_is_running_on = config.getPort();
```

### Note

This is an internal module and should not be used in 3rd party apps.

To get the current config send a GET request to `/api/system/config`.
Note that `/api/system/config` route is installed by the Bolt module `bolt_module_system`. 